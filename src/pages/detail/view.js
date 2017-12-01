import React, {Component} from 'react';
import axios from 'axios';
import style from './style.mcss';

export default class Detail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			top_title: "VOA",
			title: "正在加载中...",
			content: "<p>正在加载中...</p>",
			time: "",
			from: "",
			down_count: ""
		}
		this.VideoBtn = false;
		this.sountBtn = false;
		this.handleScroll = this.handleScroll.bind(this);
		this.handlePlayVideo = this.handlePlayVideo.bind(this);
		this.handletimeupdate = this.handletimeupdate.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);
		this.handlemuteBtnClick = this.handlemuteBtnClick.bind(this);
	}

	render() {
		this.changeAdStyle = {
			position: "fixed",
			top: 0,
			right: 0
		}
		return (
			<div className={style['detail_container']}>
				<div className={style['detail']}>
					<div className={style['top_title']}>{ this.state.top_title }</div>
					<div className={style['detail-title']}>
						<p className={style['detail_title_name']}>{ this.state.title }</p>
						<p className={style['detail_title_things']}>
							<span>时间：{ this.state.time }</span>
							<span className={style['from']}>来源：{ this.state.time }</span>
							<span>收听下载次数：{ this.state.down_count }次</span>
						</p>
					</div>
					<div className={style['detail_AdPic_1']}>
						<img alt="Ad_detail" src={require('../../statics/images/detailAd1.jpg')}/>
					</div>
					<div className={style['detail_Video']}>
						<video width="350" height="300" ref={(video)=>{this.video=video}} poster={require('../../statics/images/Ad1.jpg')}>
							<source src={require('../../statics/video/4.mp4')} type='video/mp4'></source>
						</video>
						<div className={style['detail_Video_controls']}>
							<img className={style['detail_Video_btn']} src={require('../../statics/images/v1.jpg')} alt="pause" onClick={this.handleBtnClick} ref={(btn_video)=>{this.btn_video = btn_video}} />
							<input type="range" step="0.1" min="0" max="1" value="0" ref={(progress)=>{this.progress = progress}}/>
							<span className={style['detail_Video_time']} ref={(detail_Video_time)=>{this.detail_Video_time = detail_Video_time}}></span>
							<img className={style['detail_Video_btn']} src={require('../../statics/images/v5.jpg')} onClick={this.handlemuteBtnClick} alt="pause_video" ref={(mute)=>{this.mute = mute}} />
						</div>
					</div>
					<div className={style['detail-content1']} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
					<div className={style['detail-content1']} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
				</div>
				<div className={style['detail_Ad_right']} ref={(right_Ad)=>{this.right_Ad = right_Ad}}>
					<img src={require('../../statics/images/dAd1.jpg')} alt="ad"  className={style['close_Ad_img']}/>
					<div className={style['close_Ad']}><span className={style['close_Ad_font']}>广告</span><span className={style['close_Ad_btn']}>X</span></div>
					<div className={style['Ad_right_contont1']}><p>2017北京</p><p>新东方</p><p>留学中心</p></div>
					<div className={style['Ad_right_contont2']}>2017新东方<br />留学考试vip<br />中心,立即<br />咨询！</div>
					<div className={style['Ad_right_last']}>></div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getDetailInfo();
		window.addEventListener('scroll', this.handleScroll);
		this.video.addEventListener('canplay', this.handlePlayVideo);
		this.video.addEventListener('timeupdate', this.handletimeupdate);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	getDetailInfo() {
		const id = this.props.params.id;
		axios.get("/api/detail.json?id=" + id)
			.then(this.handleGetInfoSucc.bind(this));
	}

	handleGetInfoSucc(response) {
		const {detail} = response.data.data;
		this.setState({
			title: detail.title,
			content: detail.content,
			time: detail.time,
			from: detail.from,
			down_count: detail.down_count
		})
	}

	handleScroll(e) {
		if(document.documentElement.scrollTop >= 170) {
			this.right_Ad.style.position = "fixed";
			this.right_Ad.style.top = "3px";
			this.right_Ad.style.right = "120px";
		}else {
			this.right_Ad.style.position = "absolute";
			this.right_Ad.style.top = "0px";
			this.right_Ad.style.right = "0px";
		}
	}

	handleBtnClick() {
		if(!this.autoVideoBtn){
			this.video.play();
		}else{
			this.video.pause();
		}
		this.autoVideoBtn = !this.autoVideoBtn;
	}
	handlemuteBtnClick() {
		if(!this.sountBtn){
			this.video.muted = true;
		}else{
			this.video.muted  =false;
		}
		this.sountBtn = !this.sountBtn;
	}

	handlePlayVideo() {
		this.detail_Video_time.innerHTML = Math.floor(this.video.currentTime) + '/' + Math.floor(this.video.duration);
	}

	handletimeupdate() {
		this.detail_Video_time.innerHTML = Math.floor(this.video.currentTime) + '/' + Math.floor(this.video.duration);
		this.videoprogress = this.video.currentTime / this.video.duration;
		this.progress.value = this.videoprogress;
	}

}

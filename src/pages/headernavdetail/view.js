import React, {Component} from 'react';
import axios from 'axios';
import style from './style.mcss';

export default class Detail extends Component {
	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
		if(nextProps.params.id !== this.props.params.id) {
			this.getDetailInfo(nextProps.params.id);
		}
	}

	constructor(props) {
		super(props);
		this.state = {
			listInfo: [],
			Adinfo: []
		}		
	}
	render() {
		const headerdetail_left_list = this.state.listInfo.map((item, index)=>{
				return <li className={style["headerdetail_left_item"]} key={ item.id }>{item.title}</li>
		})
		const headerdetail_right_list = this.state.Adinfo.map((item, index)=>{		
				return <li className={style["headerdetail_right_item"]} key={ item.id }>{item.content}</li>
		})

		return (
			<div className={style['headerdetail_container']}>
				<div className={style['headerdetail_top']}>
					<img alt="img_top" className={style['headerdetail_top_img2']} src={require('../../statics/images/studio_ad.gif')}/>
					<img alt="img_top" className={style['headerdetail_top_img1']} src={require('../../statics/images/studio_logo.png')}/>
				</div>	
				<div className={style['headerdetail_title']}>
					<ul className={style['headerdetail_list']}>
						<li className={style['headerdetail_item']}>大家说英语</li>
						<li className={style['headerdetail_item']}>空中英语教室</li>
						<li className={style['headerdetail_item']}>彭佳慧英语</li>
					</ul>
				</div>
				<div className={style['headerdetail_content']}>

					<div className={style['headerdetail_left']}>
						<img alt="img_top" className={style['headerdetail_left_topimg']} src={require('../../statics/images/lt_title.png')}/>
						<div className={style['headerdetail_left_img']}>
							<img alt="img_top" className={style['headerdetail_left_img1']} src={require('../../statics/images/lt_cover1.jpg')}/>
							<img alt="img_top" className={style['headerdetail_left_img1']} src={require('../../statics/images/lt_cover2.jpg')}/>
							<img alt="img_top" className={style['headerdetail_left_img1']} src={require('../../statics/images/lt_cover3.jpg')}/>
						</div>
						<ul className={style['headerdetail_left_list']}>
							{headerdetail_left_list}
						</ul>
					</div>
					<div className={style['headerdetail_right']}>
						<ul className={style['headerdetail_right_list']}>
							{headerdetail_right_list}
						</ul>
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getDetailInfo();
	}

	getDetailInfo(id) {
		id = id || this.props.params.id;
		axios.get("/api/headerlist.json?id=" + id)
			.then(this.handleGetInfoSucc.bind(this));
	}

	handleGetInfoSucc(response) {
		const { list, AdInfo } = response.data.data;
		this.setState({
			listInfo: list,
			Adinfo: AdInfo
		});
	}
}

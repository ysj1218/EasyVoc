import React, {Component} from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { connect } from 'react-redux';
import { getIndexAction, getfriendListAction } from './actionCreator';
import Clock from './components/clock.js';
import Ad from './components/swiper';
import style from './style.mcss';

class Index extends Component {
	render() {
		const listInfo = this.props.list.map((item, index)=>{
			return (
				<li key={ item.id } className={style['index_list_item']}> 
					<span className={style['index_list_title']}><Link to={ item.link }>[ { item.category } ]</Link></span> 
					<span className={style['index_list_content']}><Link to={ item.url }>{ item.title }</Link></span>
					<span className={style['index_list_time']}>( { item.time } )</span>
				</li>
			)
		})
		const firent_linklist = this.props.friendlist.map((item, index)=>{
			return (
				<li key={ item.id } className={style['firend_link_item']}>{ item.title }</li>
			)
		})
		return(
			<div className={style['index-content']}>
				<div className={style['index-content-list']}>
					<h3 className={style['index-title']}>VOA（美国之音）慢速英语,常速英语,官网最新内容在线收听。</h3>
					<ul className={style['index-list']}>
						{ listInfo }
					</ul>
				</div>
				<div className={style['firend_link']}>
					<h3 className={style['firend_link_title']}>VOA友情链接</h3>
					<ul className={style['firend_link_list']}>
						{ firent_linklist }
					</ul>
				</div>
				<div className={style['showclock']}>
					<Clock />
				</div>
				<div className={style['Swiper_Ad']}>
					<Ad />
				</div>
				
			</div>
		)
	}

	componentDidMount() {
			this.getIndexInfo();
	}

	getIndexInfo() {
		axios.get('/api/index.json')
			.then(this.props.handleGetInfoSucc.bind(this));
	}

}


const mapStateToProps = function(state) {
	return {
		list: state.index.list,
		friendlist: state.index.firend_linklist
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleGetInfoSucc: (response) => {
		const { list, friendList } = response.data.data;
		dispatch(getIndexAction(list));
		dispatch(getfriendListAction(friendList));
	}
})


export default connect(mapStateToProps, mapDispatchToProps)(Index);
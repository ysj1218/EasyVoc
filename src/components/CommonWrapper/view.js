import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import style from  './style.mcss';

export default class CommonWrapper extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [],
			listtype: []
		}
		this.handleGetHeaderDataSucc = this.handleGetHeaderDataSucc.bind(this)
	}

	render() {

		const list = this.state.list.map((item, index) => {
			return <li className={style['header-item']} key={item.id}><Link to={item.url}>{item.title}</Link></li>
		})

		const english = this.state.listtype.map((item, index)=>{
			return (
				<div key={ item.id } className={style['englishTypeItem']}>
					<h3 className={style['englishTypeItem_title']}>{ item.title }</h3>
					<ul className={style['englishTypeItem_ul']}>
						{
							item.list.map((item, value)=>{
								return <li key={ item.id } className={style['englishTypeItem_li']}><Link to={ item.url } className={style['englishTypeItem_li_link']}>{ item.title }</Link></li>
							})
						}
					</ul>
				</div>
			)
		})
		return(
			<div>
				<div className={style["header"]}>
					<Link to="/">
						<img alt="logo" className={style['header-logo']} src={require('../../statics/images/logo.png')}/>
					</Link>
					<ul className={style['header-list']}>
						{list}
					</ul>
				</div>
				<div className={style['EnglishType']}>
					{ english }
				</div>

				<div>
					{this.props.children}
				</div>
				<div className={style['footer']}>
					<p className={style['footer_item']}>本网站由 <a href="http://www.easyvoa.com" className={style['footer_link']}>EasyVOA</a>开发上线 &copy; 2011-2014 <a href="http://m.easyvoa.com"  className={style['footer_link']}>手机版EasyVOA</a></p>
					<p className={style['footer_item']}>网站所有内容，均来自VOA官方网站，所有资料均只作为英文学习资料使用。 站长QQ:1801785742 欢迎联系合作</p>
					<p className={style['footer_item']}><img alt="footer_img" title="footer_img" src={require('../../statics/images/icon_9.gif')}/></p>
				</div>
			</div>
		)
		
	}

	componentDidMount() {
		axios.get('/api/header.json').then(this.handleGetHeaderDataSucc);
	}

	handleGetHeaderDataSucc(response){
		const {list, listType} = response.data.data;
		this.setState({
			list: list,
			listtype: listType
		})
	}

}
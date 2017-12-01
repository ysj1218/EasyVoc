import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import axios from 'axios';
import { getListChangeAction } from './actionCreator';
import EchartsTest from './components/barchart';
import style from './style.mcss';



class List extends Component {

	render() {
		const list = this.props.list.map((item, index) =>{
			return <li className={style['list-content-item']} key={item.id}>
						<Link to={item.link}>{item.title}</Link>
						<span className={style['list-content-time']}>({ item.time })</span>
					</li>
			})

		return (
			<div className={style['listinfo_container']}>
				<div className={style['list-content']}>
					<h3 className={style['list-content-title']}>VOA</h3>
					<ul className={style['list-content-list']}>
						{list}
					</ul>
				</div>
				<div className={style['Barchart_container']}>
					<EchartsTest />
				</div>
			</div>	
		)
	}

	componentDidMount() {
		this.getListInfo();
	}

	getListInfo() {
		const id = this.props.params.id;
		axios.get('/api/list.json?id=' + id)
			.then(this.props.changeListData)
		}
	}

const mapStateToProps = (state) => {
	return {
		list: state.list.list
	}
}



const mapDispatchToProps = (dispatch) => ({
	changeListData: (response) => {
		const { listInfo } = response.data.data;
		dispatch(getListChangeAction(listInfo));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(List);


import React, { Component } from 'react';
import Swiper from '../../../../node_modules/swiper/dist/js/swiper.js';
import  "./swiper.css";

export default class Ad extends Component {
	render() {
		return (
			<div className='swiper-container'>
				<div className='swiper-wrapper'>
					<div className='swiper-slide'>
						<img alt="ad1" title="ad1" src={require('../../../statics/images/Ad1.jpg')} />
					</div>
					<div className='swiper-slide'>
						<img alt="ad2" title="ad2"  src={require('../../../statics/images/Ad2.jpg')} />
					</div>
					<div className='swiper-slide'>
						<img alt="ad3" title="ad3"  src={require('../../../statics/images/Ad3.jpg')} />
					</div>
					<div className='swiper-slide'>
						<img alt="ad4" title="ad4"  src={require('../../../statics/images/Ad4.jpg')} />
					</div>
					<div className='swiper-slide'>
						<img alt="ad5" title="ad5"  src={require('../../../statics/images/Ad5.jpg')} />
					</div>
					<div className='swiper-slide'>
						<img alt="ad6" title="ad6"  src={require('../../../statics/images/Ad6.jpg')} />
					</div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		new Swiper(".swiper-container", {
			autoplay: true
		});
	}
}
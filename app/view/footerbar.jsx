import React , {Component} from 'react';
import ReactDOM from 'react-dom';

export default class FooterBar extends Component {
	render(){
		return (
			<div className="flex-box">
				<div className="flex-box-item active">
					<div className="flex-box-column">
						<i className="fa fa-home"></i>
					</div>
					<div className="flex-box-column">
						首页
					</div>
				</div>
				<div className="flex-box-item">
					<div className="flex-box-column">
						<i className="fa fa-home"></i>
					</div>
					<div className="flex-box-column">
						首页
					</div>
				</div>
				<div className="flex-box-item">
					<div className="flex-box-column">
						<i className="fa fa-home"></i>
					</div>
					<div className="flex-box-column">
						首页
					</div>
				</div>
			</div>
		);
	}
}
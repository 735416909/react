import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import HeaderBar from  './headerbar' ;
import FooterBar from  './footerbar' ;



export default class View extends Component {

	render(){
		return (
			<div className="container">
				<HeaderBar title='首页' />
				<h1>Hello World!</h1>
				<FooterBar />
			</div>
		);
	}

}
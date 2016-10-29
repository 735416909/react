import React , {Component} from 'react';
import ReactDOM from 'react-dom';


export default class HeaderBar extends Component {
	render(){
		return (
			<header className="headerbar">
				<a href="javascript:;" className="fl fa fa-angle-left"></a>
				<h3>{this.props.title}</h3>
				<a href="javascript:;" className="fr fa fa-user" ></a>
			</header>
		);
	}
}
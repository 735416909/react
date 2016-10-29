import React from 'react';
import ReactDOM from 'react-dom';
import View from './view/view' ;
import 'font-awesome/css/font-awesome.min.css';
import './index.less';


// 如果使用jQuery
// let $ = require('jquery');

ReactDOM.render(
	<View /> ,
    document.getElementById('app')
);

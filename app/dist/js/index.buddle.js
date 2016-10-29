webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _view = __webpack_require__(172);

	var _view2 = _interopRequireDefault(_view);

	__webpack_require__(175);

	__webpack_require__(185);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 如果使用jQuery
	// let $ = require('jquery');

	_reactDom2.default.render(_react2.default.createElement(_view2.default, null), document.getElementById('app'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _headerbar = __webpack_require__(173);

	var _headerbar2 = _interopRequireDefault(_headerbar);

	var _footerbar = __webpack_require__(174);

	var _footerbar2 = _interopRequireDefault(_footerbar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_Component) {
		_inherits(View, _Component);

		function View() {
			_classCallCheck(this, View);

			return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
		}

		_createClass(View, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'container' },
					_react2.default.createElement(_headerbar2.default, { title: '\u9996\u9875' }),
					_react2.default.createElement(
						'h1',
						null,
						'Hello World!'
					),
					_react2.default.createElement(_footerbar2.default, null)
				);
			}
		}]);

		return View;
	}(_react.Component);

	exports.default = View;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var HeaderBar = function (_Component) {
		_inherits(HeaderBar, _Component);

		function HeaderBar() {
			_classCallCheck(this, HeaderBar);

			return _possibleConstructorReturn(this, (HeaderBar.__proto__ || Object.getPrototypeOf(HeaderBar)).apply(this, arguments));
		}

		_createClass(HeaderBar, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'header',
					{ className: 'headerbar' },
					_react2.default.createElement('a', { href: 'javascript:;', className: 'fl fa fa-angle-left' }),
					_react2.default.createElement(
						'h3',
						null,
						this.props.title
					),
					_react2.default.createElement('a', { href: 'javascript:;', className: 'fr fa fa-user' })
				);
			}
		}]);

		return HeaderBar;
	}(_react.Component);

	exports.default = HeaderBar;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(34);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var FooterBar = function (_Component) {
		_inherits(FooterBar, _Component);

		function FooterBar() {
			_classCallCheck(this, FooterBar);

			return _possibleConstructorReturn(this, (FooterBar.__proto__ || Object.getPrototypeOf(FooterBar)).apply(this, arguments));
		}

		_createClass(FooterBar, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'flex-box' },
					_react2.default.createElement(
						'div',
						{ className: 'flex-box-item active' },
						_react2.default.createElement(
							'div',
							{ className: 'flex-box-column' },
							_react2.default.createElement('i', { className: 'fa fa-home' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'flex-box-column' },
							'\u9996\u9875'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'flex-box-item' },
						_react2.default.createElement(
							'div',
							{ className: 'flex-box-column' },
							_react2.default.createElement('i', { className: 'fa fa-home' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'flex-box-column' },
							'\u9996\u9875'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'flex-box-item' },
						_react2.default.createElement(
							'div',
							{ className: 'flex-box-column' },
							_react2.default.createElement('i', { className: 'fa fa-home' })
						),
						_react2.default.createElement(
							'div',
							{ className: 'flex-box-column' },
							'\u9996\u9875'
						)
					)
				);
			}
		}]);

		return FooterBar;
	}(_react.Component);

	exports.default = FooterBar;

/***/ },

/***/ 175:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 185:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
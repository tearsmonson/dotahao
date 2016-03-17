var App = require('./components/App.js');
var React = require('react');
var ReactDOM = require('react-dom');
var AppAPI = require('./utils/appAPI.js');

ReactDOM.render(
	<App />,
	document.getElementById('app')
);
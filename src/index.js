import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import '../app/css/styles.css'
import Layout from './pages/Layout.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';



const app = document.getElementById('app');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="contact" component={Contact}></Route>
		</Route>
	</Router>, 
app);
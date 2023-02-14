import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ColorMode from './components/ColorMode.js';

import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Landing />
		<Nav />
		<About />
		<Projects />
	</>
);
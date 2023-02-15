import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ColorMode from './components/ColorMode.js';

import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects'
import Skills from './components/Skills'
import IconGroup3 from './components/IconGroup3'
import SkillContainer from './components/SkillContainer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Landing />
		<Nav />
		<About />
		<Skills />
		<Projects />
	</>
);
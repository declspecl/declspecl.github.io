import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import ColorMode from './components/ColorMode.js';

import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects'
import IconGroup3 from './components/IconGroup3'
import SkillContainer from './components/SkillContainer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Landing />
		<Nav />
		<About />
		<SkillContainer direction="row">
			<IconGroup3 img_src_1="assets/html.png" img_src_2="assets/css.png"img_src_3="assets/js.png"/>
			<IconGroup3 img_src_1="assets/placeholder.png" img_src_2="assets/placeholder.png"img_src_3="assets/placeholder.png"/>
		</SkillContainer>
		<SkillContainer direction="row-reverse">
			<IconGroup3 img_src_1="assets/html.png" img_src_2="assets/css.png"img_src_3="assets/js.png"/>
			<IconGroup3 img_src_1="assets/placeholder.png" img_src_2="assets/placeholder.png"img_src_3="assets/placeholder.png"/>
		</SkillContainer>
		<Projects />
	</>
);
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Landing from './components/Landing';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Landing />
		<Nav />
		<About />
		<Skills />
		<Projects />
		<Contact />
		<Footer />
	</>
);
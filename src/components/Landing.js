import React from 'react'
import './Landing.css'

import Canvas from './Canvas.js'

const Landing = () =>
{
    return (
        <section className="landing">
            <Canvas />
            <div className="landing_info">
                <h1>Hi! I'm <span>Gavin D'Hondt</span>.</h1>
                <h2>I'm a <span>programmer</span>, and I'm <span>obsessed with learning</span>.</h2>
            </div>
        </section>
    );
}

export default Landing;
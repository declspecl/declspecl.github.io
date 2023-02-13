import { useState } from 'react'

import './Nav.css'

const Nav = () =>
{
    const [active, setActive] = useState(false);

    return (
        <section className="nav_bar">
            <div className={(active) ? "nav_links active" : "nav_links"}>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact_me">Contact me</a>
            </div>
            <div className="nav_menu" onClick={() => { setActive(!active)} }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
    );
}

export default Nav;
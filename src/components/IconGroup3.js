import React from 'react';

import './IconGroup3.css'

class IconGroup3 extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div className="skill_container">
                <img src={this.props.img_src_1} alt="lol" className="skill_icon" />
                <img src={this.props.img_src_2} alt="lol" className="skill_icon" />
                <img src={this.props.img_src_3} alt="lol" className="skill_icon" />
            </div>
        );         
    }
}

export default IconGroup3;
import React from 'react';

import './IconGroup3.css'

class IconGroup3 extends React.Component
{
    render()
    {
        const img1 = (this.props.img_src_1 !== null) ? <img src={this.props.img_src_1} alt="skill 1" className="skill_icon" loading="lazy"/> : <div className="skill_icon"></div>;
        const img2 = (this.props.img_src_2 !== null) ? <img src={this.props.img_src_2} alt="skill 1" className="skill_icon" loading="lazy"/> : <div className="skill_icon"></div>;
        const img3 = (this.props.img_src_3 !== null) ? <img src={this.props.img_src_3} alt="skill 1" className="skill_icon" loading="lazy"/> : <div className="skill_icon"></div>;

        return (
            <div className="skill_container">
                {img1}
                {img2}
                {img3}
            </div>
        );         
    }
}

export default IconGroup3;
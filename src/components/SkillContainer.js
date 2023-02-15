import React from 'react';

import IconGroup3 from './IconGroup3';

import './SkillContainer.css'

const SkillContainer = ({direction, skill_title, children}) =>
{
    return (
        <div className="skill_group" style={{"flexDirection" : direction}}>
            <h1 className="skill_group_title">{skill_title}</h1>
            <div className="skil_group_icon_group">{children}</div>
        </div>
    );
}

export default SkillContainer;
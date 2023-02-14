import React from 'react';

import IconGroup3 from './IconGroup3';

import './SkillContainer.css'

const SkillContainer = ({direction, children}) =>
{
    return (
        <div className="skill_group" style={{"flex-direction" : direction}}>
            <h1 className="skill_group_title">Test</h1>
            <div className="skil_group_icon_group">{children}</div>
        </div>
    );
}

export default SkillContainer;
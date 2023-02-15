import SkillContainer from './SkillContainer';
import IconGroup3 from './IconGroup3';

import './Skills.css'

const Skills = () =>
{
    return (
        <section className="skills">
            <h1 className="skills_title" id="skills">Skills</h1>
            <SkillContainer direction="row" skill_title="Low Level">
                <IconGroup3 img_src_1="assets/cpp.png" img_src_2="assets/rust.png"img_src_3="assets/opengl.png"/>
            </SkillContainer>
            <SkillContainer direction="row-reverse" skill_title="Web">
                <IconGroup3 img_src_1="assets/html.png" img_src_2="assets/css.png"img_src_3="assets/js.png"/>
                <IconGroup3 img_src_1="assets/typescript.png" img_src_2="assets/react.png"img_src_3="assets/node.png"/>
            </SkillContainer>
            <SkillContainer direction="row" skill_title="General">
                <IconGroup3 img_src_1="assets/python.png" img_src_2="assets/cs.png"img_src_3="assets/java.png"/>
            </SkillContainer>
        </section>
    );
}

export default Skills;
import SkillContainer from './SkillContainer';
import IconGroup3 from './IconGroup3';

import './Skills.css'

const Skills = () =>
{
    return (
        <section className="skills">
            <h1 className="skills_title" id="skills">Skills</h1>
            <div className="skill_containers">
                <SkillContainer skill_title="Low Level">
                    <IconGroup3 img_src_1="assets/cpp.png" img_src_2="assets/rust.png" img_src_3="assets/asm.png"/>
                    <IconGroup3 img_src_1={null} img_src_2="assets/opengl.png" img_src_3={null}/>
                </SkillContainer>
                <SkillContainer skill_title="Web">
                    <IconGroup3 img_src_1="assets/html.png" img_src_2="assets/css.png" img_src_3="assets/js.png"/>
                    <IconGroup3 img_src_1="assets/typescript.png" img_src_2="assets/react.png" img_src_3="assets/node.png"/>
                </SkillContainer>
                <SkillContainer skill_title="General">
                    <IconGroup3 img_src_1="assets/python.png" img_src_2="assets/cs.png" img_src_3="assets/java.png"/>
                </SkillContainer>
            </div>
        </section>
    );
}

export default Skills;
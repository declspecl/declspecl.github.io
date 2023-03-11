import SkillContainer from './SkillContainer';
import IconGroup3 from './IconGroup3';

import './Skills.css'
import { useEffect, useRef, useState } from 'react';

const Skills = () =>
{
    const sectionRef = useRef(null);

    const [visible, setVisible] = useState(false);

    const callbackFunction = (entries) =>
    {
        setVisible(entries[0].isIntersecting);
    }
    
    const options =
    {
        root: null,
        rootMargin: "0px",
        threshhold: 1.0
    };

    useEffect(() =>
    {
        const observer = new IntersectionObserver(callbackFunction, options);
        
        if (sectionRef.current)
        {
            observer.observe(sectionRef.current);
        }

        return () =>
        {
            if (sectionRef.current)
            {
                observer.unobserve(sectionRef.current);
            }
        }
    }, [sectionRef, options])

    return (
        <section className={(visible) ? "skills observed_section visible" : "skills observed_section"} ref={sectionRef}>
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
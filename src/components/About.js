import InfoCard from './InfoCard'

import './About.css'
import { useEffect, useRef, useState } from 'react';

const About = () =>
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
        <section className={(visible) ? "about observed_section visible" : "about observed_section" } ref={sectionRef}>
            <h1 className="about_title" id="about">About</h1>
            <p className="about_description">All about me! <a href="assets/resume.pdf" target="_blank">Here</a> is a link to my resume if you would like to see it</p>
            <div className="about_all">
                <div className="about_pairs">
                    <InfoCard
                        src="assets/clock.png"
                        alt="clock icon"
                        title="Hobbies"
                        description="My biggest passions are programming, gaming, and playing instruments. I am obsessed with
                        technology and progressing my knowledge about computer science, as I have been teaching myself
                        programming for over 5 years. I also love playing video games as well as strategic games like chess
                        and go."
                        title_color="#789aff"
                    />
                    <InfoCard
                        src="assets/book.png"
                        alt="book icon"
                        title="Education"
                        description="I am currently a senior at the Utica Academy for International Studies and will
                        graduate as a valedictorian with a 4.2 GPA. Starting in the fall of 2023, I will be attending
                        Oakland University as a computer science major. I pride myself in my academics, and I always
                        strive to do my best."
                        title_color="#ff8dae"
                    />
                </div>
                <div className="about_pairs">
                    <InfoCard
                        src="assets/heart.png"
                        alt="heart icon"
                        title="Personality"
                        description="I love meeting and collaborating with others, especially those who share similar
                        interests. I often adopt a leader role in groups, as I thoroughly enjoy teaching and helping
                        others. I am down to earth, humorous, and loyal, and I love learning new things."
                        title_color="#fac898"
                    />
                   <InfoCard
                        src="assets/clipboard.png"
                        alt="clipboard icon"
                        title="Goals"
                        description="My primary goal is to obtain an internship and gather real-world experience in the
                        field. I hope to expand my knowledge about computer science, specifically about machine learning,
                        cloud computing, and software development throughout my college career."
                        title_color="#77dd77"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
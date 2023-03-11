import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import './Projects.css'

const Projects = () =>
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
        <section className={(visible) ? "projects observed_section visible" : "projects observed_section"} ref={sectionRef}>
            <h1 className="projects_title" id="projects">Projects</h1>
            <div className="projects_cards_all">
                <div className="projects_card_rows">
                    <ProjectCard
                        baseimage="valoguessr.png"
                        title="ValoGuessr"
                        description={"\tValoGuessr is a desktop game where users are placed into a random position from Valorant maps and guess their position on a minimap. I made this for my HL IB Computer Science IA, and due to logistical reasons, I can not yet publish it on github, but I hope to release it as a real standalone game for everyone! It was an extremely insightful project and I learned a lot from it.\n\n\tTechnologies used: I used C++ with OpenGL and GLFW for graphics and implemented various UI and game elements from scratch."}
                        repolink="https://drive.google.com/drive/folders/1iaN4VwsiN4CNdE2QfGqukLCj5ohyiEYx?usp=sharing"
                    />
                    <ProjectCard
                        baseimage="mlptools.png"
                        title="MLP Tools"
                        description={"\tMLP Tools is somethign I made so that I could track, manage, and understand multi level pointers better. I am very fascinated by reverse engineering, and a very common pattern in large applications is MLPs. So, I decided to make a web app for React.js practice and so that I could help myself down the road!\n\n\tTechnologies used: I used Typescript in React.js for this as well as custom vanilla HTML and CSS so that I could customize it to my needs while having impressive functionality."}
                        repolink="https://github.com/declspecl/MLPTools"
                        demolink="https://declspecl.github.io/MLPTools/"
                    />
                </div>
                <div className="projects_card_rows">
                <ProjectCard
                        baseimage="micrograd.jpg"
                        title="Micrograd"
                        description={"\tMicrograd is a small autograd and neural network engine that supports backpropagation. I made it when watching Andrej Karpathy's neural network series and implemented it in C++ instead of Python. It was really challenging supoprting the same logic in a language witout a garbage collector but it taught me a TON about machine learning and was super fun!\n\n\tTechnologies used: I used vanilla C++ for the whole project, as it is a command line project just to test my knowledge about neural networks."}
                        repolink="https://github.com/declspecl/micrograd"
                    />
                    <ProjectCard
                        baseimage="candy-floss.png"
                        title="candy-floss"
                        description={"\tcandy-floss is a colorscheme plugin I made for Neovim (my favorite text editor). It uses my favorite color palette that I mostly created which is also the color palette that is used on this site! It also has support for lualine, another popular plugin. This project taught me a lot how plugins work for Neovim and various other applications.\n\n\tTechnologies used: I used Lua for this project because it is very easy to learn and has good support in Neovim."}
                        repolink="https://github.com/declspecl/candy-floss"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;
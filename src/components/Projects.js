import ProjectCard from "./ProjectCard";
import './Projects.css'

const Projects = () =>
{
    return (
        <section className="projects">
            <h1 className="projects_title" id="projects">Projects</h1>
            <div className="projects_cards_all">
                <div className="projects_card_rows">
                    <ProjectCard
                        baseimage="valoguessr.png"
                        title="ValoGuessr"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi. Arcu cursus euismod quis viverra nibh cras pulvinar. Sed blandit libero volutpat sed cras ornare arcu dui. Sed nisi lacus sed viverra tellus in hac habitasse platea. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Elementum nibh tellus molestie nunc non blandit."
                        repolink="https://github.com/declspecl/ValoGuessr"
                    />
                    <ProjectCard
                        baseimage="valoguessr.png"
                        title="ValoGuessr"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi. Arcu cursus euismod quis viverra nibh cras pulvinar. Sed blandit libero volutpat sed cras ornare arcu dui. Sed nisi lacus sed viverra tellus in hac habitasse platea. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Elementum nibh tellus molestie nunc non blandit."
                        repolink="https://github.com/declspecl/ValoGuessr"
                        demolink="#"
                    />
                </div>
                <div className="projects_card_rows">
                    <ProjectCard
                        baseimage="valoguessr.png"
                        title="ValoGuessr"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi. Arcu cursus euismod quis viverra nibh cras pulvinar. Sed blandit libero volutpat sed cras ornare arcu dui. Sed nisi lacus sed viverra tellus in hac habitasse platea. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Elementum nibh tellus molestie nunc non blandit."
                        repolink="https://github.com/declspecl/ValoGuessr"
                    />
                    <ProjectCard
                        baseimage="valoguessr.png"
                        title="ValoGuessr"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Eu facilisis sed odio morbi. Arcu cursus euismod quis viverra nibh cras pulvinar. Sed blandit libero volutpat sed cras ornare arcu dui. Sed nisi lacus sed viverra tellus in hac habitasse platea. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Elementum nibh tellus molestie nunc non blandit."
                        repolink="https://github.com/declspecl/ValoGuessr"
                        demolink="#"
                    />
                </div>
            </div>
        </section>
    )
}

export default Projects;
import InfoCard from './InfoCard'

import './About.css'

const About = () =>
{
    return (
        <section className="about">
            <h1 className="about_title" id="about">About</h1>
            <div className="about_all">
                <div className="about_pairs">
                    <InfoCard
                        src="assets/clock.png"
                        alt="clock icon"
                        title="Hobbies"
                        description="My two main hobbies are gaming and programming! I have been teaching myself
                        programming for over 5 years now, and it is my biggest passion. I also love playing video
                        games with friends as well as retro games!"
                        title_color="#789aff"
                    />
                    <InfoCard
                        src="assets/book.png"
                        alt="book icon"
                        title="Education"
                        description="I am currently a senior at the Utica Academy for International Studies .
                        Once I graduate, I will be attending Oakland University as a computer science major. I pride
                        myself in my academics, and I always strive to do my best."
                        title_color="#ff8dae"
                    />
                </div>
                <div className="about_pairs">
                <InfoCard
                        src="assets/heart.png"
                        alt="heart icon"
                        title="Personality"
                        description="I am a somewhat reserved person, but I do love meeting new people, especially
                        those with similar passions. I am very loyal and care a lot about my friends and loved ones."
                        title_color="#fac898"
                    />
                   <InfoCard
                        src="assets/clipboard.png"
                        alt="clipboard icon"
                        title="Goals"
                        description="My goals currently are to finish the school year strong and attempt to achieve an
                        internship over the summer. I am itching to gather real world experience in the computer science
                        field and am putting a lot of effort in trying to make that a reality."
                        title_color="#77dd77"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
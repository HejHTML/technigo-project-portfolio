export const Hero = () => {
    const heroImage = new URL("../assets/emma4.jpg", import.meta.url).href;

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>I am Emma Franzén</h1>
                <p className="work-title">Frontend Developer</p>

                <p className="hero-intro">
                    Hi, my name is Emma, and I’m studying web development in my free time. Currently, I’m building this website as my personal portfolio to showcase the projects I’ve been working on.
                </p>

                <p className="hero-intro">
                    On this site, you’ll find a variety of projects I’ve created, ranging from responsive websites built with HTML and CSS to interactive applications using JavaScript and APIs.
                </p>

                <p className="hero-intro">
                    I hope this portfolio gives you an idea of my work, my approach to web development, and the progress I’ve made so far. Feel free to explore the projects, check out the live demos, and view the code on GitHub for a deeper look at how I built them.
                </p>
            </div>

            <img src={heroImage} alt="Profile" className="hero-img" />
        </section>
    );
};

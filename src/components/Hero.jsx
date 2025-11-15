export const Hero = () => {
    return (
        <section className="hero">

            <h1>Emma Franzén</h1>
            <p>Frontend Developer based in Sweden</p>
            <img
                src="src/assets/emma.jpg"
                alt="Profile"
                className="hero-img"
            />

            <div className="hero-buttons">
                <a href="#" className="btn-primary">Live demo</a>
                <a href="#" className="btn-secondary">View code</a>
            </div>
        </section>
    );
};

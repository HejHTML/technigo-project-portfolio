export const Hero = () => {
    const heroImage = new URL("../assets/emma4.jpg", import.meta.url).href;

    return (
        <section className="hero">
            <h1>Emma Franzén</h1>
            <p className="work-title">Frontend Developer based in Sweden</p>
            <p className="hero-intro">
                Hej, jag heter Emma och jag pluggar till webbutvecklare på fritiden. Just nu kodar jag den här sidan som ska bli min portfolio.
            </p>

            <img
                src={heroImage}
                alt="Profile"
                className="hero-img"
            />
        </section>
    );
};

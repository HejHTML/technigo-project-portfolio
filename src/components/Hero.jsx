export const Hero = () => {
    const heroImage = new URL("../assets/emma4.jpg", import.meta.url).href;

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Jag är Emma Franzén</h1>
                <p className="work-title">Frontend Developer</p>

                <p className="hero-intro">
                    Hej! Jag heter Emma och jag studerar webbutveckling hos Technigo. Just nu bygger jag den här webbplatsen som min personliga portfolio för att visa upp de projekt jag har arbetar med.
                </p>
                <p className="hero-intro">Jag är utbildad beteendevetare och folkhögskollärare med inriktning mot folkhälsa och pedagogik, och jag älskar att lära mig nya saker — oavsett om det handlar om lindy hop, att spela piano eller att lära mig programmering. Mitt motto är: ”Om du inte gör något, händer inget heller.”
                </p>

                <p className="hero-intro">
                    På den här sidan hittar du en mängd olika projekt jag har skapat, allt från responsiva webbplatser byggda med HTML och CSS till interaktiva applikationer med JavaScript, TypeScript och React.
                </p>

                <p className="hero-intro">
                    Jag hoppas att min portfolio ger dig en bra bild av mitt arbete, mitt sätt att närma mig webbutveckling och den utveckling jag har gjort hittills. Kolla in projekten, testa live-demoversionerna och kika på koden på GitHub för en djupare inblick i hur jag har byggt dem. Välkommen!
                </p>
            </div>

            <img src={heroImage} alt="Profile" className="hero-img" />
        </section>
    );
};

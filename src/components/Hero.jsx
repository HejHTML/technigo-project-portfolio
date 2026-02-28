export const Hero = () => {
    const heroImage = new URL("../assets/emma4.jpg", import.meta.url).href;

    return (
        <section className="hero">
            <div className="hero-text">
                <h1>Jag är Emma Franzén</h1>
                <p className="work-title">Frontend Developer</p>

                <p className="hero-intro">
                    Tjabba! Emma här. Jag studerar webbutveckling hos Technigo sedan hösten 2025. Den här webbplatsen är min portfolio där jag visar upp de projekt jag har arbetat med under kursen.
                </p>
                <p className="hero-intro">Tidigare har jag arbetat som folkhögskollärare, mentor och hälsopedagog. Jag kan lite om mycket och har aldrig slutat plugga nya saker under tiden som jag jobbat. Dialekter och ortnamn, religionsfilosofi, brukspiano och musikteater är några små stickspår som givit mig nya insikter. Lindy hop och improvisationsteater har följt med mig länge.
                </p>

                <p className="hero-intro">
                    På den här sidan hittar du en mängd olika projekt jag har skapat, allt från responsiva webbplatser byggda med HTML och CSS till interaktiva applikationer med JavaScript, TypeScript och React.
                </p>

                <p className="hero-intro">
                    Kolla in projekten, testa live-demoversionerna och kika på koden på GitHub för en inblick i hur jag har byggt dem. Välkommen!
                </p>
            </div>

            <img src={heroImage} alt="Profile" className="hero-img" />
        </section>
    );
};

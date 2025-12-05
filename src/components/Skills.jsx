import { Divider } from "./Divider";

export const Skills = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>

            {/* First list */}
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>

            </ul>

            {/* Second list */}
            <Divider />

            {/* Andra listan */}
            <ul>
                <li>APIs</li>
                <li>Git</li>
                <li>Node.js</li>
            </ul>
        </section>
    );
};

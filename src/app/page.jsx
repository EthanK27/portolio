import Section from "@/components/Section";

export default function HomePage() {
    return (
        <main>
            <Section id="home" title="Welcome">
                <p>Hi, I'm Ethan - a CS Student at Virginia Tech</p>
            </Section>

            <Section id="about" title="About Me">
                <p>Blah blah blah</p>
            </Section>

            <Section id="projects" title="Projects">
                <p>Some stuff i made</p>
            </Section>
        </main>
    );
}
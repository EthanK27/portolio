import ExperienceSection from "../../components/ExperienceSection";

export const metadata = {
    title: "Experience",
    description: "Work history and descriptions",
};

export default function ExperiencePage() {
    return (
        <main className="relative z-10">
            <ExperienceSection/>
        </main>
    );
}
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
    title: "Projects",
    description: "Personal projects and case studies",
};

export default function ProjectsPage() {
    return (
        <main className="mx-auto max-w-7xl px-6 py-10">
            <header className="mb-6">
                <h1 className="text-3xl font-extrabold">Projects</h1>
                <p className="mt-2 text-gray-600">
                    Click a project to view details, GitHub, and (if available) a deployed version of the project.
                </p>
            </header>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </main>
    );
}
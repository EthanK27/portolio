import { notFound } from "next/navigation";
import { projects } from "@/content/projects";

export default async function ProjectDetailPage({ params }) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) return notFound();

    return (
        <main className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl px-6 pt-10 pb-10">
            {/* Image */}
            {project.image && (
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover rounded-2xl object-cover sm:h-[500px] mid:h-[650px]"
                /> 
            )}

            {/* Title */}
            <h1 className="mt-6 text-2xl font-bold">{project.title}</h1>
            <p className="mt-3 text-gray-700">{project.description}</p>

            {/* Buttons */}
            <div className="mt-5 flex gap-3">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
                >
                    GitHub
                </a>
                {project.demo && (
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 transition"
                    >
                        Live Demo
                    </a>
                )}
            </div>

            {/* Tech chips */}
            {project.tech?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            )}
        </main>
    );
}

import Link from "next/link";

export default function ProjectCard({ project }) {
    return (
        <Link
            href={`/projects/${project.id}`}
            className="group relative block overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
        >
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl bg-gray-100 sm:h-72 lg:h-80">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                        No image
                    </div>
                )}
            </div>

            {/* Text */}
            <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{project.summary}</p>
            </div>

            {/* Hover overlay */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
                <div className="relative rounded-full bg-white p-3 shadow">
                    {/* open-in-new icon */}
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-600">
                        <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>
                    </svg>
                </div>
            </div>
        </Link>
    );
}
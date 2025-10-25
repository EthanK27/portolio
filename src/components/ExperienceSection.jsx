"use client";
import { experience } from "@/content/experience";

export default function ExperienceSection() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-12">
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold">Experience</h1>
                <p className="mt-2 text-gray-600">Roles, internships, and work I've done.</p>
            </header>

            <ol className="relative border-l border-gray-200">
                {experience.map((item, idx) => (
                    <li key={idx} className="ml-6 pb-10 last:pb-0">
                        {/* Node */}
                        <span className="absolute -left-[7px] mt-1 h-3.5 w-3.5 rounded-full border-2 border-blue-500 bg-white"></span>

                        {/* Card */}
                        <article className="rounded-2xl border bg-white/70 p-5 shadow-sm backdrop-blur">
                            <div className="flex flex-wrap items-baseline justify-between gap-3">
                                <h3 className="text-lg font-bold">
                                    {item.role}{" "}
                                    <span className="font-normal text-gray-600">@ {item.company}</span>
                                </h3>
                                <div className="text-sm text-gray-500">
                                    {item.start} - {item.end}
                                </div>
                            </div>

                            <div className="mt-1 text-sm text-gray-500">{item.location}</div>

                            {item.bullets?.length > 0 && (
                                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
                                    {item.bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                    ))}
                                </ul>
                            )}

                            {item.tech?.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {item.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </article>
                    </li>
                ))}
            </ol>
        </section>
    );
}

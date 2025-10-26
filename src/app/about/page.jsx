export const metadata = {
    title: "About | Ethan Kemprowski",
    description: "Graduating senior focused on modern web and dependable systems.",
};

export default function AboutPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
            {/* Header */}
            <header className="mb-10">
                <p className="text-xs uppercase tracking-widest text-gray-500">About Me</p>
                <h1 className="mt-2 text-3xl font-extrabold">
                    Hi, I'm Ethan — a graduating senior at Virginia Tech.
                </h1>
                <p className="mt-3 max-w-3xl text-gray-700">
                    I'm a graduating senior finishing my <span className="font-semibold">B.S. in Computer Science and Minor in Mathematics at Virginia Tech (Expected May 2026)</span>.
                    I enjoy working with a variety of languages to complete full stack projects and developing userful scripts.
                    Recently I've interned at <span className="font-semibold">Hexagon</span> and <span className="font-semibold">Ticketmaster</span>, using an expansive tech stack:
                    React UIs, Python/C# services, Azure/AWS infra, dashboards, load testing, and automation.
                </p>
            </header>

            {/* Two-column: Left = what I'm looking for + highlights, Right = quick facts */}
            <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Left */}
                <div className="md:col-span-2 space-y-8">
                    {/* What I'm looking for */}
                    <div className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur">
                        <h2 className="text-xl font-bold">What I'm looking for</h2>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
                            <li>New-grad <span className="font-medium">Software Engineer/Developer</span> roles (frontend, backend, or full-stack)</li>
                            <li>Teams that value mentorship, reviews, and thoughtful shipping</li>
                            <li>Modern stacks (React/Next.js, JavaScript, Python, Object Oriented Programming) and cloud (Azure/AWS)</li>
                        </ul>
                    </div>

                    {/* Highlights */}
                    <div className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur">
                        <h2 className="text-xl font-bold">Recent highlights</h2>
                        <ul className="mt-3 space-y-3 text-gray-700">
                            <li>Built a full-stack ticketing app (<span className="font-medium">React + Chakra UI + Flask + Stripe + SQLite</span>) with JWT auth and database storage.</li>
                            <li>Created a DevOps dashboard powered by <span className="font-medium">KQL + App Insights</span> for live service health.</li>
                            <li>Automated testing (<span className="font-medium">JavaScript, Postman, VSCode</span>) to raise reliability for a core service.</li>
                            <li>Extended metrics retention from <span className="font-medium">2 weeks → 3 years</span> to improve analytics.</li>
                        </ul>
                    </div>

                    {/* Skills */}
                    <div className="space-y-8">
                        {/* Languages & Frameworks */}
                        <div className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur">
                            <h2 className="text-xl font-bold">Languages & Frameworks</h2>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                    "C", "CSS", "C#", "Flask", "HTML", "HashiCorp Configuration Language (HCL)", "Java", "JavaScript", "KQL", "Next.js", "Node.js", "Python", "React", "SQL"
                                ].map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tools & Platforms */}
                        <div className="rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur">
                            <h2 className="text-xl font-bold">Tools & Platforms</h2>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                    "AWS", "Azure", "Bokeh", "Docker Desktop", "Flask", "Eclipse", "GitHub", "GitLab", "Grafana", "Intellij", "Jira", "JMeter",  "Jupyter Notebook", "NPM", "Postman", "Stripe", "Terraform",  "Visual Studios", "Vite", "VSCode"
                                ].map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: quick facts card */}
                <aside className="md:col-span-1">
                    <div className="sticky top-24 rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur">
                        <h3 className="text-base font-semibold">Quick facts</h3>
                        <dl className="mt-3 space-y-3 text-sm">
                            <div className="flex justify-between gap-4">
                                <dt className="text-gray-500">Graduation</dt>
                                <dd className="font-medium text-gray-800">May, 2026</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt className="text-gray-500">Location</dt>
                                <dd className="font-medium text-gray-800">Chantilly, VA</dd>
                            </div>
                            <div className="flex justify-between gap-4">
                                <dt className="text-gray-500">Interests</dt>
                                <dd className="text-gray-800">Frontend, backend, full-stack, tooling, automated testing</dd>
                            </div>
                        </dl>

                        <div className="mt-6 flex flex-col gap-2">
                            <a
                                href="/resume"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
                            >
                                View Resume
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 transition"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="mt-6 border-t pt-4 text-xs text-gray-500">
                            Outside of code: hockey (Washington Capitals), music, pokemon, video games, watching movies + shows.
                        </div>
                    </div>
                </aside>
            </section>
        </main>
    );
}

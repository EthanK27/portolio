"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const PHRASES = [
    "Full Stack Development",
    "Frontend Engineering",
    "UI/UX & Accessibility",
];

export default function IntroSection() {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [typedLength, setTypedLength] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [caretVisible, setCaretVisible] = useState(true);

    useEffect(() => {
        const fullText = PHRASES[phraseIndex];
        const isFullyTyped = typedLength === fullText.length;
        const isEmpty = typedLength === 0;

        const typeSpeed = isDeleting ? 40 : 90;
        const holdWhenFull = 900;
        const delay = isDeleting ? typeSpeed : (isFullyTyped ? holdWhenFull : typeSpeed);

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (!isFullyTyped) setTypedLength(len => len + 1);
                else setIsDeleting(true);
            } else {
                if (!isEmpty) setTypedLength(len => len - 1);
                else {
                    setIsDeleting(false);
                    setPhraseIndex(i => (i + 1) % PHRASES.length);
                }
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [phraseIndex, typedLength, isDeleting]);

    useEffect(() => {
        const blink = setInterval(() => setCaretVisible(v => !v), 500);
        return () => clearInterval(blink);
    }, []);

    return (
        <section className="relative overflow-hidden">
            <MeshBG />

            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-2 md:py-24">
                {/* LEFT: text */}
                <div className="order-2 md:order-1">
                    <p className="text-xs uppercase tracking-widest text-gray-500">
                        Hi There,
                    </p>

                    <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">
                        I'm Ethan <span className="text-blue-600">Kemprowski</span>
                    </h1>

                    <p className="mt-4 text-lg text-gray-700">
                        I am into{" "}
                        <span className="font-semibold text-blue-600">
                            {PHRASES[phraseIndex].slice(0, typedLength)}
                            <span className={`ml-0.5 ${caretVisible ? "opacity-100" : "opacity-0"}`}>|</span>
                        </span>
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="/about"
                            className="inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow transition hover:bg-blue-700"
                        >
                            About Me
                        </Link>

                        {/* Socials */}
                        <div className="flex items-center gap-3">
                            <Social href="https://www.linkedin.com/in/ethan-kemprowski" label="LinkedIn">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.06c.62-1.18 2.14-2.42 4.41-2.42 4.72 0 5.59 3.11 5.59 7.15V24h-5v-7.1c0-1.69-.03-3.86-2.35-3.86-2.36 0-2.72 1.84-2.72 3.74V24h-5V8z" />
                                </svg>
                            </Social>
                            <Social href="https://github.com/ethank27" label="GitHub">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                                    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.52 10.41.55.1.75-.24.75-.53 0-.26-.01-1.11-.02-2.02-3.06.67-3.71-1.3-3.71-1.3-.5-1.26-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.67 1.14 1.67 1.14.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.44-.28-5.01-1.22-5.01-5.42 0-1.2.43-2.18 1.14-2.95-.11-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.13a10.7 10.7 0 0 1 2.82-.38c.95 0 1.9.13 2.82.38 2.15-1.44 3.1-1.13 3.1-1.13.6 1.55.22 2.7.11 2.98.71.77 1.14 1.75 1.14 2.95 0 4.21-2.58 5.13-5.03 5.4.39.34.73 1.01.73 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.63.76.52A10.52 10.52 0 0 0 23 11.5C23 5.24 18.27.5 12 .5z" />
                                </svg>
                            </Social>
                            <Social href="mailto:ekemprow@gmail.com" label="Email">
                                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                                    <path d="M12 13 2 6.76V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6.76L12 13zm10-9H2l10 6 10-6z" />
                                </svg>
                            </Social>
                        </div>
                    </div>
                </div>

                {/* RIGHT: circular avatar */}
                <div className="order-1 flex w-full justify-center md:order-2">
                    <div className="relative z-20">
                        <div className="h-64 w-64 rounded-full bg-amber-400 shadow-xl md:h-80 md:w-80" />
                        <img
                            src="/homePhoto.jpg"
                            alt="Ethan avatar"
                            className="absolute inset-0 m-auto h-[86%] w-[86%] rounded-full object-cover drop-shadow-xl scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Social({ href, label, children }) {
    return (
        <a
            href={href}
            aria-label={label}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition hover:border-blue-200 hover:text-blue-600"
        >
            {children}
        </a>
    );
}

function MeshBG() {
    return (
        <svg
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-30"
            viewBox="0 0 800 400"
            preserveAspectRatio="none"
            aria-hidden
        >
            <defs>
                <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
            </defs>
            <g fill="none" stroke="currentColor" strokeOpacity="0.15" className="text-gray-300">
                <path d="M20 40 120 60 220 10 320 70 420 20 520 80" />
                <path d="M60 200 160 180 260 220 360 160 460 210 560 170" />
                <path d="M100 340 200 320 300 360 400 300 500 340 600 300" />
            </g>
            <rect width="100%" height="100%" fill="url(#dots)" className="text-gray-100" />
        </svg>
    );
}

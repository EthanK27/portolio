"use client";
import { useEffect, useRef } from "react";

export default function Orbs() {
    const orb1 = useRef(null);
    const orb2 = useRef(null);

    useEffect(() => {
        const handleMove = (e) => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            const dx = (e.clientX / w - 0.5) * 2;
            const dy = (e.clientY / h - 0.5) * 2;

            if (orb1.current)
                orb1.current.style.transform = `translate(${dx * 40}px, ${dy * 20}px)`;
            if (orb2.current)
                orb2.current.style.transform = `translate(${dx * -40}px, ${dy * -20}px)`;
        };

        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, []);

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-10 overflow-hidden"
        >
            {/* TOP-LEFT orb (dark blue) */}
            <div
                ref={orb1}
                className="absolute -left-24 -top-24 h-[400px] w-[400px] rounded-full bg-blue-900/30 opacity-90 blur-none"
            />

            {/* BOTTOM-RIGHT orb (dark red) */}
            <div
                ref={orb2}
                className="absolute -bottom-24 -right-24 h-[500px] w-[500px] rounded-full bg-red-900/30 opacity-90 blur-none"
            />
        </div>
    );
}
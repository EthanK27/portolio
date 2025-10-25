"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
    const [pos, setPos] = useState({ x: -9999, y: -9999 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onMove = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
            if (!visible) setVisible(true);
        };
        const onLeave = () => setVisible(false);

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("mouseleave", onLeave);
        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseleave", onLeave);
        };
    }, [visible]);

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
            style={{ opacity: visible ? 1 : 0 }}
        >
            <div
                className="absolute aspect-square w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
                style={{
                    left: pos.x,
                    top: pos.y,
                    // make it stronger so you SEE it right away
                    background:
                        "radial-gradient(closest-side, rgba(37,99,235,0.28), rgba(37,99,235,0.12), transparent 70%)",
                    willChange: "transform",
                }}
            />
        </div>
    );
}
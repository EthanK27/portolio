"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
    { href: "contact", label: "Contact Me" }
]

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 w-full transistion-all ${
                scrolled ? "backdrop-blur bg-white/70 shadow-sm" : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto flex items-center justify-between px-6 py-3">
                {/* Logo / Name */}
                <Link href="/" className="font-semibold text-xl tracking-tight text-gray-800">
                    MyPortfolio<span className="text-blue-600">.</span>
                </Link>

                {/* Navigation Links */}
                <ul className="flex gap-6 text-sm font-medium">
                    {navItems.map(({ href, label }) => {
                        const isActive = pathname === href;
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`transition-colors hover:text-blue-600 ${
                                        isActive ? "text-blue-600 font-semibold" : "text-gray-700"
                                    }`}
                                >
                                    {label}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}
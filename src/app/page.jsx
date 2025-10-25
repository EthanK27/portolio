import Link from "next/link";
import IntroSection from "../components/IntroSection";
import Orbs from "../components/Orbs";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-white text-gray-900">
            <Orbs/>
            <IntroSection/>
        </main>
    );
}
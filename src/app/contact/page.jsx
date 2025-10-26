export const metadata = {
    title: "Contact | Ethan Kemprowski",
    description: "Get in touch with Ethan",
};

import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
            <header className="mb-8">
                <h1 className="text-3xl font-extrabold">Contact Me</h1>
                <p className="mt-2 text-gray-600">
                    Have a question or want to collaborate? Send me a note.
                </p>
            </header>
            <ContactForm />
        </main>
    );
}

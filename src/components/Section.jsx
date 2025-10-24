export default function Section({ id, title, children }) {
    return (
        <section id={id} className = "container mx-auto py-16 px-4">
            <h2 className="text-2xl font-bold mb-6">{title}</h2>
            <div>{children}</div>
        </section>
    );
}
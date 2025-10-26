"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState({ sending: false, success: null, error: null });

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ sending: true, success: null, error: null });
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok || !data.ok) {
                setStatus({
                    sending: false,
                    success: null,
                    error: "Please check your inputs and try again.",
                });
                return;
            }
            setStatus({ sending: false, success: "Thanks! I'll get back to you soon.", error: null });
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch {
            setStatus({ sending: false, success: null, error: "Network error. Try again?" });
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur"
        >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Subject (optional)</label>
                <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Quick summary"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>

            <div className="flex items-center justify-between">
                {status.success && <p className="text-sm text-green-600">{status.success}</p>}
                {status.error && <p className="text-sm text-red-600">{status.error}</p>}
                <button
                    type="submit"
                    disabled={status.sending}
                    className="ml-auto inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {status.sending ? "Sending..." : "Send message"}
                </button>
            </div>
        </form>
    );
}

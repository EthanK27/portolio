import { sql } from "@vercel/postgres";
import { z } from "zod";

const ContactSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.email("Invalid email").max(200),
    subject: z.string().max(150).optional().default(""),
    message: z.string().min(1, "Message is required").max(5000),
});

export async function POST(req) {
    try {
        const body = await req.json();
        const parsed = ContactSchema.safeParse(body);
        if (!parsed.success) {
            return new Response(JSON.stringify({ ok: false }), {
                status: 400,
                headers: { "content-type": "application/json" },
            });
        }

        const { name, email, subject, message } = parsed.data;

        // Create table (safe to run; move to migration later if you want)
        await sql`
            CREATE TABLE IF NOT EXISTS contacts (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                subject TEXT,
                message TEXT NOT NULL,
                created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
            );
        `;

        const result = await sql`
            INSERT INTO contacts (name, email, subject, message)
            VALUES (${name}, ${email}, ${subject}, ${message})
            RETURNING id, created_at;
        `;

        return new Response(
            JSON.stringify({ ok: true, id: result.rows[0].id, createdAt: result.rows[0].created_at }),
            { status: 201, headers: { "content-type": "application/json" } }
        );
    } catch (err) {
        console.error("Contact POST error:", err);
        return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
            status: 500,
            headers: { "content-type": "application/json" },
        });
    }
}

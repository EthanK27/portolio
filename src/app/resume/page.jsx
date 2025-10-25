import Resume from "../../components/Resume";

export const metadata = {
    title: "Resume | Ethan Kemprowski",
    description: "View and download my resume",
};

export default function ResumePage() {
    return (
        <main>
            <Resume file="/Ethan_Kemprowski_Resume.pdf" />
        </main>
    )
}
"use client";

export default function Resume({ file = "/Ethan_Kemprowski_Resume.pdf" }) {
    return (
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-4 flex items-center justify-between">
                <h1 className="text-2xl font-bold">Resume</h1>
                <div className="flex gap-3">
                    <a
                        href={file}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 transition"
                    >
                        Open in new tab
                    </a>
                    <a
                        href={file}
                        download
                        className="inline-flex items-center rounded-md border border-blue-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 transition"
                    >
                        Download PDF
                    </a>
                </div>
            </div>

            <div className="hidden md:block">
                <object
                    data={`${file}#view=FitH`}
                    type="application/pdf"
                    className="h-[85vh] w-full rounded-xl border shadow-sm"
                >
                    <p className="p-4">
                        Your browser can’t display PDFs here.{" "}
                        <a href={file} target="_blank" rel="noreferrer" className="underline">
                            Open
                        </a>{" "}
                        or{" "}
                        <a href={file} download className="underline">
                            download
                        </a>.
                    </p>
                </object>
            </div>

            <div className="md:hidden">
                <div className="rounded-xl border p-4 text-sm text-gray-700">
                    PDF viewing is better on larger screens.{" "}
                    <a href={file} target="_blank" rel="noreferrer" className="underline">
                        Open PDF
                    </a>{" "}
                    or{" "}
                    <a href={file} download className="underline">
                        download
                    </a>.
                </div>
            </div>
        </div>
    );
}
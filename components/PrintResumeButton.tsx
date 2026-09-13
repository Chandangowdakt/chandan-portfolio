"use client";

import { Printer } from "lucide-react";

export default function PrintResumeButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-lg bg-[#2dd4bf] px-5 py-2.5 text-sm font-medium text-[#0a0f1c] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2dd4bf]"
    >
      <Printer size={16} />
      Download / Print PDF
    </button>
  );
}

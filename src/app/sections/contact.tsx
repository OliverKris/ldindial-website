import { ArrowRight, Mail, FileText, MapPin, ExternalLink } from "lucide-react"
import { BsLinkedin } from "react-icons/bs"

export default function ContactSection() {
    return (
        <section id="contact" className="border-t border-border py-20 bg-primary">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-16">
                <div>
                    <p className="text-xs tracking-widest uppercase font-semibold mb-4 font-sans text-[var(--bg-subtle)]">
                        Let's Work Together
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white font-serif"
                    >
                        Seeking roles where evidence<br />
                        drives <em className="not-italic text-[var(--accent-action)]">real decisions.</em>
                    </h2>
                    <p className="text-sm leading-relaxed mb-10 max-w-md font-sans text-[rgba(255,255,255,0.72)]">
                        Actively looking for full-time positions in public health policy, health system strategy, or
                        applied research beginning Summer 2025. Chicago-area preferred; remote considered.
                    </p>

                    {/* Form wireframe */}

                    <div className="flex flex-col gap-4 max-w-md">
                        <div className="grid grid-cols-2 gap-4">
                            {["Name", "Email"].map((f) => (
                            <div key={f}>
                                <label
                                className="text-[11px] tracking-wide text-white/60 mb-1.5 block font-sans"
                                >
                                {f}
                                </label>
                                <div className="h-10 rounded-sm border" style={{ borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)" }} />
                            </div>
                            ))}
                        </div>
                        {["Organization / Role", "Message"].map((f) => (
                            <div key={f}>
                            <label className="text-[11px] tracking-wide text-white/60 mb-1.5 block font-sans">
                                {f}
                            </label>
                            <div
                                className="rounded-sm border"
                                style={{
                                height: f === "Message" ? 96 : 40,
                                borderColor: "rgba(255,255,255,0.2)",
                                background: "rgba(255,255,255,0.06)",
                                }}
                            />
                            </div>
                        ))}
                        <button
                            className="flex items-center justify-center gap-2 h-11 rounded-sm text-sm font-semibold text-white hover:opacity-90 transition-opacity font-sans bg-[var(--accent-action)]"
                        >
                            Send Message <ArrowRight size={14} />
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-7 md:pt-14">
                    {[
                    { icon: <Mail size={15} />, label: "Email", value: "lavanidindial05@gmail.com", href: "mailto:lavanidindial05@gmail.com" },
                    { icon: <BsLinkedin size={15} />, label: "LinkedIn", value: "linkedin.com/in/lavanidindial", href: "#" },
                    { icon: <FileText size={15} />, label: "CV Download", value: "lavani_dindial_cv_2026.pdf", href: "#" },
                    { icon: <MapPin size={15} />, label: "Location", value: "Washington, DC · Open to Remote", href: null },
                    ].map(({ icon, label, value, href }) => (
                    <div key={label}>
                        <p className="text-[10px] tracking-widest uppercase font-bold mb-2 font-sans text-[var(--bg-subtle)]">
                        {label}s
                        </p>
                        {href ? (
                        <a
                            href={href}
                            className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors font-sans"
                        >
                            <span className="opacity-60">{icon}</span>
                            {value}
                            <ExternalLink size={11} className="opacity-40" />
                        </a>
                        ) : (
                        <div className="flex items-center gap-2 text-sm text-white/70 font-sans">
                            <span className="opacity-60">{icon}</span>
                            {value}
                        </div>
                        )}
                    </div>
                    ))}

                    {/* Availability badge */}
                    <div
                    className="mt-4 px-4 py-3 rounded-sm"
                    style={{ background: "rgba(184,216,207,0.15)", border: "1px solid rgba(184,216,207,0.3)" }}
                    >
                    <div className="flex items-center gap-2 text-xs font-semibold font-sans text-[var(--bg-subtle)]">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available · Summer 2026
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default function Footer() {
    return (
        <footer className="border-t border-border py-6" style={{ background: "var(--brand-primary)", borderColor: "rgba(255,255,255,0.1)" }}>
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
                <span className="text-xs text-white/40 font-sans">© 2026 Lavani Dindial</span>
                <span className="text-xs text-white/40 font-sans">Public Health · Leadership/Management · DC</span>
            </div>
        </footer>
    )
}
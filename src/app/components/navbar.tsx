import Button from "./button"

const NAV_LINKS = ["About", "Impact", "Work", "Experience", "Contact"];

export default function NavBar() {
    return (
        <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
            <nav className="max-w-5xl mx-auto px-6 h-15 flex items-center justify-between">
                {/* Home */}
                <button className="flex flex-col leading-none">
                    <span className="text-sm font-semibold text-primary">Lavani Dindial</span>
                    <span className="text-[11px] text-muted-foreground tracking-wide">
                        Public Health · Management & Leadership
                    </span>
                </button>
                
                {/* Desktop */}
                <ul className="hidden md:flex items-center gap-7 font-mono">
                    {NAV_LINKS.map((link) => (
                        <li key={link}>
                            <button
                                className={"text-sm text-muted-foreground hover:text-foreground transition-colors"}
                            >
                                {link}
                            </button>
                        </li>
                    ))}
                    <li>
                        <Button
                            size='sm'
                        >
                            <p>Let&apos;s Talk</p>
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
import Button from "./button"

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
                
                {/* Navbar links */}
                <ul className="flex flex-row items-center gap-5 font-mono">
                    <li>About</li>
                    <li>Skill</li>
                    <li>Projects</li>
                    <li>Experiences</li>
                    <li>Contact</li>
                    <li className="ps-3">
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
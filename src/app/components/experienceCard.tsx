export default function ExperienceCard({data} : {data : any}){
    return (
        <div key={data.org} className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 border-t border-border pt-8">
            <div>
                <p className="text-sm font-semibold text-foreground mb-1 font-sans">{data.org}</p>
                <p className="text-xs text-muted-foreground mb-2 font-sans">{data.role}</p>
                <p className="text-xs text-muted-foreground">{data.period}</p>
            </div>
            <div>
                {/* What changed */}
                <div className="rounded-sm px-4 py-3 mb-4 text-sm font-medium leading-relaxed font-sans bg-[var(--bg-subtle)] text-[var(--brand-primary)]">
                    <span className="text-[10px] tracking-widest uppercase font-bold block mb-1 opacity-70">
                        What Changed
                    </span>
                    {data.changed}
                </div>
                <ul className="flex flex-col gap-2">
                    {data.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm text-muted-foreground font-sans">
                            <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[var(--accent-action)]">
                            </span>
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
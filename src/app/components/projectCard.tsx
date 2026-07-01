export default function Project({data} : {data : any}){
    return (
        <div key={data.number} className="group border-t border-border py-10 grid grid-cols-1 md:grid-cols-[72px_1fr] gap-6">
            {/* Number */}
            <div className="pt-1">
                <span className="text-3xl font-bold leading-none text-subtle">
                    {data.number}
                </span>
            </div>

            <div>
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-medium px-2.5 py-0.5 font-sans rounded-sm border border-brand-secondary text-primary">
                        {data.tag}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">{data.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-5 leading-snug font-serif font-brand-primary">
                    {data.title}
                </h3>

                {/* PAO Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                    {[
                        { label: "Problem", body: data.problem },
                        { label: "Action", body: data.action },
                        { label: "Outcome", body: data.outcome, highlight: true },
                    ].map(({ label, body, highlight }) => (
                        <div
                            key={label}
                            className={`rounded-sm p-4 border`}
                        >
                            <p className="text-[10px] tracking-widest uppercae font-bold mb-2 font-sans">
                                {label}
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
                                {body}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {data.tags.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-sm font-sans bg-muted text-brand-primary"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
import { SKILLS_COLS } from "../data/skillsData";
import { TrendingUp } from "lucide-react";

export default function SkillSection(){
    return(
        <section id="skills" className="border-t border-border py-20 bg-secondary">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-10">
                    <p className="text-xs tracking-widest uppercase font-semibold mb-2 font-sans text-brand-primary">
                    Competencies
                    </p>
                    <h2 className="text-3xl font-bold font-serif">
                    Both sides of the equation.
                    </h2>
                    <p className="text-muted-foreground mt-2 max-w-md text-sm font-sans">
                    The dual degree isn't decorative — it changes how I read a problem. Public health for the what and why; management for the how and how much.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SKILLS_COLS.map(({ heading, items }) => (
                        <div key={heading}>
                            <h3 className="text-xs tracking-widest uppercase font-bold mb-5 pb-3 border-b font-sans text-brand-primary border-brand-secondary">
                                {heading}
                            </h3>
                            <ul className="flex flex-col gap-2.5">
                                {items.map((s) => (
                                    <li key={s} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)] font-sans">
                                        <TrendingUp size={12} className="mt-[4px] flex-shrink-0 text-[var(--accent-action)]"/>
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
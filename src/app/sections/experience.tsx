import { EXPERIENCE } from "../data/experienceData";
import Experience from "../components/experienceCard";
import { EDUCATION } from "../data/educationData";

export default function ExperienceSection(){
    return(
        <section id="experience" className="border-t border-border py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12">
                    <p className="text-xs tracking-widest uppercase font-semibold mb-2 font-sans text-primary">
                        Experience
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold font-header">
                        Where I've worked, <br />and what moved.
                    </h2>
                </div>

                <div className="flex flex-col gap-10">
                    {EXPERIENCE.map((exp) => (
                        <Experience key={exp.org} data={exp}/>
                    ))}
                </div>

                <div className="mt-16 pt-10 border-t border-border">
                    <p className="text-xs tracking-widest uppercase font-bold mb-6 font-sans text-[var(--brand-primary)]">
                    Education
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {EDUCATION.map(({ credential, school, detail }) => (
                            <div
                                key={school}
                                className="rounded-sm p-6 border"
                                style={{ borderColor: "var(--border-default)" }}
                            >
                                <p
                                    className="text-xs font-bold tracking-wide mb-1 font-sans text-[var(--accent-action)]"
                                >
                                    {credential}
                                </p>
                                <p className="text-base font-semibold mb-1 font-serif">{school}</p>
                                <p className="text-sm text-muted-foreground font-sans">{detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
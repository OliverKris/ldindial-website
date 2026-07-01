import { PROJECTS } from "../data/projectData";
import Project from "../components/projectCard";

export default function ProjectSection(){
    return (
        <section id="work" className="border-t border-border py-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="mb-12">
                    <p className="text-xs tracking-widest uppercase font-semibold mb-2 font-sans text-primary">
                        Selected Projects
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold font-header">
                        Problem → Action → Change.
                    </h2>
                    <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed font-sans">
                        Each project is framed the same way a policy memo is: here's the gap, here's what I did, here's what shifted.
                    </p>
                </div>

                {/* Projects */}
                <div className="flex flex-col gap-0">
                    {PROJECTS.map((project) => (
                        <Project key={project.number} data={project}></Project>
                    ))}
                </div>
                <div className="border-t border-border"></div>
            </div>
        </section>
    )
}
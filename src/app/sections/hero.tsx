import Button from "../components/button";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { FaRegFileAlt } from "react-icons/fa";

export default function Hero() {
    return (
        <section id="hero" className="pt-15">
            {/* Sage banner */}
            <div className="bg-primary">
                <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
                    <span className="text-xs text-primary-foreground/70 tracking-widest uppercase font-sans">
                        Portfolio · Class of 2027
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-primary-foreground/70 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                        Open to Opportunties
                    </span>
                </div>
            </div>


            <div className="max-w-5xl mx-auto px-6 pt-16 pb-20 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-12 items-start">
                {/* Left */}
                <div>
                    <p className="text-sm font-medium mb-3 tracking-wide text-(--accent-action) font-sans">
                        Public Health · Management & Leadership
                    </p>
                    <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight mb-6 text-foreground font-serif">
                        I don&apos;t just study<br />
                        health systems —<br />
                        <em className="not-italic" style={{ color: "var(--brand-primary)" }}>I improve them.</em>
                    </h1>
                    <h2 className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl font-sans">
                        Lavani Dindial, GW · Graduating May 2027. 
                        My work sits where policy analysis meets operational management — identifying gaps others miss and translating evidence into decisions that stick.
                    </h2>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <Button>
                            See the Impact
                        </Button>
                        
                        <Button variant="secondary">
                            View Projects
                        </Button>
                        
                        <Button variant="secondary" as="a" href="#">
                            <FaRegFileAlt size={13} /> CV
                        </Button>
                    </div>
                </div>

                {/* Right - photo + pull quote */}
                <div className="flex flex-col gap-4">
                    <div className="relative">
                        <Image
                            src="/profile.png"
                            alt="Lavani Dindial"
                            width={500}
                            height={600}
                            priority
                            className="w-full object-cover rounded-sm"
                        />
                        {/* Terracotta label */}
                        <div
                            className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-sm text-white text-sm leading-snug font-medium"
                            style={{background: "var(--accent-action)" }}
                        >
                            &quot;The business/management lens is the part most public health candidates are missing.&quot;
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
                        <MapPin size={12} />
                        Washington, DC · Open to remote
                    </div>
                </div>
            </div>
        </section>
    )
}
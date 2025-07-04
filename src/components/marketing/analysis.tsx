import { DownloadIcon, FilterIcon, TrendingUpIcon } from "lucide-react";
import Container from "../global/container";
import { Button } from "../ui/button";
import { MagicCard } from "../ui/magic-card";
import Image from "next/image";

const Analysis = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Our Work <br /><span className="font-subheading italic">in Action</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        Real-world applications of our AI-powered satellite monitoring solutions across diverse environmental challenges.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-blue-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Flood Warning & Water Management
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Real-time monitoring of water levels and flood risk assessment using NDWI analysis.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg"
                                        alt="Flood monitoring and water management"
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-sky-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Illegal Landfill & Methane Detection
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Advanced spectral analysis for detecting unauthorized waste sites and methane emissions.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg"
                                        alt="Landfill and methane detection"
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-green-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Renewable Energy Site Automation
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Automated monitoring and optimization of wind and solar energy installations.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg"
                                        alt="Renewable energy monitoring"
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>

                <Container delay={0.3}>
                    <div className="rounded-2xl bg-background/40 relative border border-border/50">
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            gradientColor="rgba(59,130,246,0.1)"
                            className="p-4 lg:p-8 w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 right-0 bg-orange-500 w-1/4 h-1/4 blur-[8rem] z-20"></div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">
                                    Erosion & Land Damage Assessment
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Comprehensive analysis of soil erosion patterns and land degradation monitoring.
                                </p>

                                <div className="mt-6 w-full bg-card/50 overflow-hidden rounded-lg">
                                    <Image
                                        src="https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg"
                                        alt="Erosion and land damage assessment"
                                        width={500}
                                        height={300}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
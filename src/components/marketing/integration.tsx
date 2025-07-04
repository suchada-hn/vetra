import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

const Integration = () => {
    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 scale-">
            <Container className="relative">
                <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="max-w-sm w-full h-auto mx-auto mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
                                alt="RIFFAI team member - Satellite specialist"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                                alt="RIFFAI team member - AI researcher"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <Image
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                                alt="RIFFAI team member - Climate scientist"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                alt="RIFFAI team member - Earth observation expert"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>

                </div>
            </Container>

            <div className="flex flex-col items-center text-center max-w-3xl mx-auto lg:absolute lg:top-1/4 inset-x-0 mt-12 lg:mt-0">
                <h2 className="text-2xl md:text-4xl lg:text-6xl font-heading font-semibold !leading-snug">
                    A Shared Ambition
                </h2>
                <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6 max-w-2xl">
                    RIFFAI was founded by a team of highly experienced professionals from backgrounds in Satellite, AI, Climate Science, and Earth Observation. Our team includes specialists from institutions like Imperial College London, Stanford University, and MIT.
                </p>
            </div>

            <Container delay={0.3}>
                <div className="relative hidden lg:flex items-center justify-center overflow-visible">
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="relative flex h-dvh w-full flex-col items-center justify-center overflow-visible">
                        <Ripple />
                    </div>

                    <div className="absolute z-20 flex items-center justify-center group">
                        <div className="grid grid-cols-2 gap-4 max-w-md">
                            <Image
                                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
                                alt="RIFFAI team member - Satellite specialist"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                                alt="RIFFAI team member - AI researcher"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                            <Image
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                                alt="RIFFAI team member - Climate scientist"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                alt="RIFFAI team member - Earth observation expert"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
};

export default Integration;
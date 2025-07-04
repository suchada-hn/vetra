import { cn } from "@/lib";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import Icons from "../global/icons";
import Images from "../global/images";
import { Button } from "../ui/button";
import Ripple from "../ui/ripple";

const SOCIAL_PLATFORMS = [
    { icon: Icons.linkedin, position: "left-3", size: "small", iconSize: "small", className: "hidden lg:flex" },
    { icon: Icons.tiktok, position: "left-2", size: "medium", iconSize: "medium" },
    { icon: Icons.insta, position: "left-1", size: "large", iconSize: "large" },
    { icon: Icons.youtube, position: "right-1", size: "large", iconSize: "large" },
    { icon: Icons.x, position: "right-2", size: "medium", iconSize: "medium" },
    { icon: Icons.facebook, position: "right-3", size: "small", iconSize: "small", className: "hidden lg:flex" }
];

const Integration = () => {

    const getPositionClasses = (position: string) => {
        switch (position) {
            case "left-3": return "-translate-x-[285px]";
            case "left-2": return "-translate-x-[210px]";
            case "left-1": return "-translate-x-[125px]";
            case "right-1": return "translate-x-[125px]";
            case "right-2": return "translate-x-[210px]";
            case "right-3": return "translate-x-[285px]";
            default: return "";
        }
    };

    const getSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-20";
            case "medium": return "size-16";
            case "small": return "size-12";
            default: return "size-20";
        }
    };

    const getIconSizeClasses = (size: string) => {
        switch (size) {
            case "large": return "size-10";
            case "medium": return "size-7";
            case "small": return "size-5";
            default: return "size-10";
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center w-full py-20 scale-">
            <Container className="relative">
                <div className="relative flex flex-col lg:hidden items-center justify-center overflow-visible">
                    <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-3/5 h-14 lg:h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full -rotate-12 blur-[6.5rem] -z-10"></div>

                    <div className="max-w-sm w-full h-auto mx-auto mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            <Image
                                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
                                alt="Team member 1"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                                alt="Team member 2"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <Image
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                                alt="Team member 3"
                                width={200}
                                height={200}
                                className="w-full h-auto rounded-lg"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                alt="Team member 4"
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
                                alt="Team member 1"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg"
                                alt="Team member 2"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                            <Image
                                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                                alt="Team member 3"
                                width={120}
                                height={120}
                                className="w-full h-auto rounded-lg group-hover:scale-110 transition-all duration-500"
                            />
                            <Image
                                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                                alt="Team member 4"
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
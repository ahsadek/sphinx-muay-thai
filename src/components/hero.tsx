import { FC, useState, useEffect } from "react";
import heroImg1 from "../assets/heroImg1.png";
import heroImg2 from "../assets/heroImg2.png";

interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768); // Example breakpoint for mobile
        };

        checkScreenSize(); // Initial check
        window.addEventListener("resize", checkScreenSize); // Update on resize

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);
    return (
        <div className="fixed w-full flex flex-col items-center justify-center mt-24 lg:mt-28">
            <img
                src={heroImg1}
                className="mt-5 lg:mt-10 w-full h-[19rem] lg:h-[54rem] object-scale-down opacity-20"
                style={{
                    maskImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
                }}
            />
            {isMobile && (
                <img
                    src={heroImg2}
                    className="mt-16 lg:mt-10 w-full h-[16rem] lg:h-[54rem] object-scale-down opacity-20"
                    style={{
                        maskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, rgba(0, 0, 0, 0) 100%)",
                    }}
                />
            )}
            <div className="flex items-center justify-center absolute font-merienda">
                <h1 className="mt-16 lg:-mt-10 text-zinc-200 text-3xl lg:text-5xl tracking-tighter">
                    The Art Of Eight Limbs
                </h1>
            </div>
        </div>
    );
};

export default Hero;

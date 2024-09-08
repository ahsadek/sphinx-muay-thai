import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroImg1 from "../assets/heroImg1.webp";
import heroImg2 from "../assets/heroImg2.webp";

interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
    const [currentImage, setCurrentImage] = useState(heroImg1);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === heroImg1 ? heroImg2 : heroImg1
            );
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(imageInterval); // Cleanup interval on unmount
    }, []);

    return (
        <div
            className="fixed w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: `url("/heroBg.svg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <motion.div
                className="relative w-3/4 h-3/4 flex items-center justify-center"
                initial={{ opacity: 0 }} // Start with opacity 0
                animate={{ opacity: 1 }} // Fade in to opacity 1
                transition={{ duration: 5 }} // Transition duration of 1 second
                key={currentImage} // Key to trigger re-render when image changes
            >
                <img
                    src={currentImage}
                    className="object-contain w-full h-full filter brightness-50"
                    alt="Hero Image"
                />
            </motion.div>
            <div className="flex items-center justify-center absolute font-merienda">
                <h1 className="mt-8 lg:-mt-10 text-zinc-200 text-3xl lg:text-5xl tracking-tighter">
                    Sphinx <span className="text-red-500">Muay</span> Thai
                    <span className="text-red-500">.</span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;

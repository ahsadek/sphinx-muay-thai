import { FC } from "react";
import heroImg from "../assets/heroImg.jpg";

interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
    return (
        <div className="fixed w-full flex items-center justify-center mt-24 lg:mt-28">
            <img
                src={heroImg}
                className="w-full h-[40rem] lg:h-[54rem] object-cover object-center opacity-10"
            />
            <div className="flex items-center justify-center absolute font-merienda">
                <h1 className="text-zinc-200 text-4xl lg:text-5xl tracking-tighter shadow-lg">
                    The Art Of Eight Limbs
                </h1>
            </div>
        </div>
    );
};

export default Hero;

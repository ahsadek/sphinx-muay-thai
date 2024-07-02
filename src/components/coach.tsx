import { FC } from "react";
import coachImg from "../assets/coachImg.jpg";

interface IAboutProps {}

const About: FC<IAboutProps> = ({}) => {
    return (
        <section id="about" className="scroll-mt-20 bg-zinc-800">
            <div className="flex flex-col-reverse lg:gap-12 items-center py-10 lg:py-20 px-6 lg:px-8 mx-auto max-w-7xl lg:flex-row w-full">
                <div className="w-full h-[25rem] lg:h-[35rem] flex justify-center items-center mt-12 lg:mt-0">
                    <img
                        className="h-full w-full object-cover border-2 border-zinc-200 rounded-sm"
                        src={coachImg}
                        alt="office content 1"
                    />
                </div>
                <div className="w-full font-light text-zinc-200 text-lg flex flex-col gap-5">
                    <div>
                        <span className="text-xl lg:text-2xl text-zinc-500 mb-1 font-merienda">
                            About Sphinx Muay Thai
                        </span>
                        <h3 className="text-3xl lg:text-4xl">Sameh Ahmed Ali</h3>
                        <span className="ml-20 text-xl lg:text-2xl text-red-500 font-light">
                            Founder And Head About
                        </span>
                    </div>
                    <p className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eveniet
                        assumenda itaque quasi laudantium sequi harum molestiae adipisci mollitia
                        tempora qui at quo expedita accusamus, exercitationem recusandae
                        necessitatibus.
                    </p>
                    <p className="text-xl">
                        Alias eveniet incidunt quasi vel hic officiis voluptates itaque ducimus.
                        Perspiciatis qui sapiente deserunt praesentium aspernatur accusamus,
                        incidunt repudiandae nihil voluptates magni voluptatum vero odit animi id
                        dolore recusandae saepe facilis iste?
                    </p>
                    {/* <div>
                        <span className="text-xl">Certification:</span>
                        <ul>
                            <li className="list-disc ml-12">Lorem ipsum dolor sit.</li>
                            <li className="list-disc ml-12">Lorem ipsum dolor sit.</li>
                            <li className="list-disc ml-12">Lorem ipsum dolor sit.</li>
                            <li className="list-disc ml-12">Lorem ipsum dolor sit.</li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default About;

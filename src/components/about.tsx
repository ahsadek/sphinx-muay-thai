import { FC } from "react";
import coachImg from "../assets/coachImg.jpg";
import { Button } from "./ui/button";

interface IAboutProps {}

const About: FC<IAboutProps> = ({}) => {
    return (
        <section id="about" className="scroll-mt-20 bg-zinc-800">
            <div className="flex flex-col-reverse lg:gap-12 items-center pt-10 pb-5 lg:pt-20 lg:pb-10 px-6 lg:px-8 mx-auto max-w-7xl lg:flex-row w-full">
                <div className="w-full h-[25rem] lg:h-[35rem] flex justify-center items-center mt-12 lg:mt-0">
                    <img
                        className="h-full w-full object-cover rounded-sm"
                        src={coachImg}
                        alt="office content 1"
                    />
                </div>
                <div className="flex flex-col gap-6 w-full">
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
                            assumenda itaque quasi laudantium sequi harum molestiae adipisci
                            mollitia tempora qui.
                        </p>
                        <p className="text-xl">
                            Alias eveniet incidunt quasi vel hic officiis voluptates itaque ducimus.
                            Perspiciatis qui sapiente deserunt praesentium aspernatur accusamus,
                            incidunt repudiandae nihil.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <span className="text-xl lg:text-2xl text-zinc-500 mb-1 font-merienda">
                            Schedule
                        </span>
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div>
                                <h2 className="text-2xl font-light text-zinc-200">
                                    Group Classes :
                                </h2>

                                <ul className="mt-2 text-zinc-200 text-lg flex flex-col pl-8 list-disc">
                                    <li className="">
                                        Monday{" "}
                                        <span className="italic text-zinc-400">
                                            8:30pm - 10:30pm
                                        </span>{" "}
                                    </li>
                                    <li className="">
                                        Wednesday{" "}
                                        <span className="italic text-zinc-400">
                                            9:00pm - 11:00pm
                                        </span>
                                    </li>
                                    <li className="">
                                        Thursday{" "}
                                        <span className="italic text-zinc-400">
                                            8:30pm - 10:30pm
                                        </span>{" "}
                                    </li>
                                    <li className="">
                                        Saturday{" "}
                                        <span className="italic text-zinc-400">
                                            9:00pm - 11:00pm
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="hidden lg:block mt-1 h-[9.1rem] border-r border-zinc-500"></div>
                            <div>
                                <h2 className="text-2xl font-light text-zinc-200 mb-4">
                                    Personal Classes :
                                </h2>
                                <Button
                                    className="ml-4 w-52 lg:w-40"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => {
                                        const contactUsElement =
                                            document.getElementById("contact-us");
                                        if (contactUsElement) {
                                            contactUsElement.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                        }
                                    }}
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

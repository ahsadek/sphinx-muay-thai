import { FC } from "react";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
    return (
        <header className="fixed w-full z-50 bg-zinc-800 border-zinc-200 border-b shadow-lg">
            <nav className="max-w-2xl lg:max-w-7xl flex items-center justify-between mx-auto py-4 px-4 lg:px-8">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse ml-2 lg:ml-0.5 xl:ml-0"
                >
                    <div className="flex gap-4">
                        <img className="h-16 lg:h-20" src={logo} alt="office content 1" />
                    </div>
                </a>
                <div className="mr-2 lg:mr-0" id="navbar-default">
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                            const contactUsElement = document.getElementById("contact-us");
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
            </nav>
        </header>
    );
};

export default Navbar;

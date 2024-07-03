import { FC } from "react";
import { useMobileMenu } from "../context/MobileMenuContext";
import logo from "../assets/logo.png";
import { Button } from "@/components/ui/button";
// import MobileNavbarReveal from "./mobileNavbarReveal";

// const links = [
//     { name: "Services", href: "#services" },
//     { name: "Gallery", href: "#gallery" },
//     { name: "Testimonials", href: "#testimonials" },
//     { name: "FAQ", href: "#faq" },
// ];

interface INavbarProps {}

const Navbar: FC<INavbarProps> = () => {
    const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

    return (
        <header className="fixed w-full z-50 bg-zinc-800 border-zinc-200 border-b shadow-lg">
            <nav className="max-w-2xl lg:max-w-7xl flex items-center justify-between mx-auto py-4 px-4 lg:px-8">
                <a
                    href="#"
                    className="flex items-center space-x-3 rtl:space-x-reverse ml-2 lg:ml-0.5 xl:ml-0"
                    onClick={() => {
                        if (isMobileMenuOpen) {
                            toggleMobileMenu();
                        }
                    }}
                >
                    <div className="flex gap-4">
                        <img className="h-16 lg:h-20" src={logo} alt="office content 1" />
                    </div>
                </a>
                {/* <button
                    type="button"
                    className="flex items-center p-2.5 w-12 h-12 justify-center text-md text-zinc-200 rounded-lg lg:hidden mr-2"
                    onClick={toggleMobileMenu}
                >
                    <span className="sr-only">Open/Close main menu</span>
                    {!isMobileMenuOpen ? (
                        <svg
                            id="open-mobile-menu-icon"
                            className="w-6 h-6"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    ) : (
                        <svg
                            id="close-mobile-menu-icon"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.2"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    )}
                </button> */}
                <div className="mr-2 lg:mr-0" id="navbar-default">
                    {/* <ul className=" flex p-4 md:p-0 mt-4 border border-slate-100 rounded-lg md:flex-row md:space-x-7 rtl:space-x-reverse md:mt-0 md:border-0">
                        {links.map((link, idx) => (
                            <li key={idx} className="flex items-center justify-center">
                                <a
                                    href={link.href}
                                    className="block text-zinc-200 text-lg hover:underline underline-offset-8"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}

                        
                    </ul> */}
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
            {/* Mobile view */}
            <div>
                <nav
                    // className={`absolute inset-x-0 z-20 w-full h-screen transition-all duration-300 ease-in-oulg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:hidden lg:items-center ${
                    //     isMobileMenuOpen
                    //         ? 'translate-x-0 opacity-100'
                    //         : 'opacity-0 translate-x-full'
                    // }`}
                    className={`absolute z-20 w-full h-screen lg:items-center
                        ${isMobileMenuOpen ? "" : "hidden"}
                    `}
                >
                    <div
                        className="px-6 pb-4 pt-7 h-screen absolute w-full right-0 bg-zinc-800 border-t font-light"
                        id="mobile-menu-navbar"
                    >
                        <a
                            href="#services"
                            className="text-3xl text-zinc-200 block rounded-lg px-2 py-4"
                            onClick={toggleMobileMenu}
                        >
                            Services
                        </a>
                        <a
                            href="#gallery"
                            className="text-3xl text-zinc-200 block rounded-lg px-2 py-4 mt-7"
                            onClick={toggleMobileMenu}
                        >
                            Gallery
                        </a>
                        <a
                            href="#testimonials"
                            className="text-3xl text-zinc-200 block rounded-lg px-2 py-4 mt-7"
                            onClick={toggleMobileMenu}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#faq"
                            className="text-3xl text-zinc-200 block rounded-lg px-2 py-4 mt-7"
                            onClick={toggleMobileMenu}
                        >
                            FAQ
                        </a>
                        <a
                            href="#contact-us"
                            className="text-3xl text-zinc-200 block rounded-lg px-2 py-4 mt-7"
                            onClick={toggleMobileMenu}
                        >
                            Contact Us
                        </a>
                        {/* <hr className="bg-slate-900 border-t border-slate-600 block rounded-lg mx-1 mt-9" /> */}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

import { motion } from "framer-motion";
import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import ContactUs from "./components/contactUs";


function App() {
    return (
        <main className="bg-zinc-800 h-screen overflow-y-auto">
            {/* Apply smooth scroll */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                
                <Hero />
            </motion.div>

            <motion.div
                className="absolute w-full z-10 mt-[46rem] lg:mt-[61rem]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <About />
                <ContactUs />
                <Footer />
            </motion.div>
        </main>
    );
}

export default App;

import Hero from "./components/hero";
import About from "./components/about";
import Footer from "./components/footer";
import ContactUs from "./components/contactUs";

function App() {
    return (
        <main className="bg-zinc-800 h-screen">
            <Hero />
            <div className="absolute w-full z-10 mt-[46rem] lg:mt-[61rem]">
                <About />
                <ContactUs />
                <Footer />
            </div>
        </main>
    );
}

export default App;

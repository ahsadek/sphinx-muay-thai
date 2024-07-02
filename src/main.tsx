import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import MobileMenuProvider from "./context/MobileMenuContext.tsx";
import Navbar from "./components/navbar.tsx";
import "leaflet/dist/leaflet.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <MobileMenuProvider>
            <Navbar />
            <App />
        </MobileMenuProvider>
    </React.StrictMode>
);

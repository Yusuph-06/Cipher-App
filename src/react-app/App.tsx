import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LandingPage from "./LandingPage";
import AuthenticationPage from "./AuthenticationPage";

function App() {
    const [showLanding, setShowLanding] = useState(true);

    return (
        <StrictMode>
            {showLanding ? (
                <LandingPage onComplete={() => setShowLanding(false)} />
            ) : (
                <AuthenticationPage />
            )}
        </StrictMode>
    );
}

createRoot(document.getElementById("root")!).render(<App />);
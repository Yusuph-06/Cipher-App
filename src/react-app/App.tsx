import { StrictMode, useState } from "react";
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

export default App;
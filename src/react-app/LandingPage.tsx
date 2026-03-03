import { useEffect } from 'react';

function LandingPage({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 5000);

        return () => clearTimeout(timer)
    }, [onComplete]);

    return (
        <div className="min-h-screen bg-[#19291df5] flex items-center justify-center font-mono">
            <h1 className="text-6xl font-bold text-[#00ff73]">CIPHERAPP</h1>
        </div>
    )
}

export default LandingPage;
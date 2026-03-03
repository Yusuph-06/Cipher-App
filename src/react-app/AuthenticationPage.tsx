import { useState } from "react";
import Setup from "./Setup";
import KeyPage from "./KeyPage";

function AuthenticationPage() {
    const [view, setView] = useState('login');

    if (view === 'setup') {
        return <Setup onNext={() => setView('keypage')} />;
    }

    if (view === 'keypage') {
        return <KeyPage />;
    }


    return (
        <>
            <div className="min-h-screen bg-[#19291df5] flex items-center justify-center p-4 font-mono text-zinc-300 shadow-lg shadow-[#00ff73]">
                <div className="bg-[#13271cde] border border-green-600  rounded-lg p-8 shadow-sm
box-shadow: var(--shadow-sm);" >

                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center shadow-sm
box-shadow: var(--shadow-sm);]">
                            <span className="text-white text-xl">🔑</span>
                        </div>
                        <h1 className="text-2xl font-bold  text-zinc-100 uppercase">CipherChat</h1>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-zinc-100 mb-1">Secure Portal</h2>
                        <p className="text-[12px] text-zinc-200 leading-tight font">
                            Mono-Alphabetic Substitution Protocol Active
                        </p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-[16px] uppercase tracking-widest text-green-500 mb-2 font-bold">Username</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">@</span>
                                <input
                                    type="text"
                                    placeholder="ENTER USERNAME..."
                                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded p-3 pl-8 text-sm focus:outline-none focus:border-green-600  transition-colors"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-[16px] uppercase tracking-widest text-green-500 mb-2 font-bold">Cipher Key</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">🔒</span>
                                <input
                                    type="password"
                                    placeholder="••••••••••••"
                                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded p-3 pl-8 text-sm focus:outline-none focus:border-green-600  transition-colors"
                                />
                            </div>
                        </div>

                        <button type="button"
                            onClick={() => setView('setup')} className="w-full bg-green-900 hover:bg-green-500 text-white font-bold py-3 px-4 rounded flex items-center justify-center gap-2 uppercase tracking-tighter shadow-lg 
box-shadow: var(--shadow-sm); ">
                            <span>➜</span> Start Chatting
                        </button>
                    </form>

                    <div className="mt-8 flex justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest">
                        <div className="flex items-center content-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            Biometric Link
                        </div>
                        <div>Create Account</div>

                    </div>
                </div>
            </div >

        </>
    )
}

export default AuthenticationPage;

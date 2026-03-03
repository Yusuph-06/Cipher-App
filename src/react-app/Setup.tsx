import { useState } from "react";

function ProgressBar({ progress }) {
    return (
        <div style={{
            width: '100%',
            backgroundColor: '#333', // Dark background part
            borderRadius: '4px',
            height: '8px',
            overflow: 'hidden'
        }}>
            <div style={{
                width: `${progress}%`, // Controlled by your state
                backgroundColor: 'oklch(62.7% 0.194 149.214)', // Green color from your image
                height: '100%',
                transition: 'width 0.3s ease-in-out' // Smooth movement
            }} />
        </div>
    );
}

function Setup({ onNext }) {
    return (
        <>
            <div className="min-h-screen bg-[#19291df5] flex gap-6 items-center justify-center p-4 font-mono text-zinc-300 shadow-lg shadow-[#13271cde]">
                <div className="bg-[#13271cde] border border-green-600  rounded-lg p-8 shadow-sm
box-shadow: var(--shadow-sm);" >

                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center shadow-sm
box-shadow: var(--shadow-sm);]">
                            <span className="text-white text-xl"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#fff" viewBox="0 0 256 256"><path d="M207.23,203.42a8,8,0,0,1-10.66,3.81l-152-72a8,8,0,0,1,0-14.46l152-72a8,8,0,1,1,6.85,14.46L66.69,128l136.73,64.77A8,8,0,0,1,207.23,203.42Z"></path></svg></span>
                        </div>
                        <h1 className="text-2xl font-bold  text-zinc-100 uppercase ">New Account</h1>
                    </div>

                    <div className="flex flex-col gap-4 mb-8">
                        <p className="text-[12px]  text-green-500 leading-tight font mb-[-12px]">Step 1</p>
                        <div className="flex flex-row w-full items-center text-zinc-300 gap-55">
                            <p>Identity</p>
                            <p>1/2</p>
                        </div>
                        <div><ProgressBar progress={50} /></div>
                        <p className="text-[15px] -mt-3 text-zinc-500">🔒 Next: CipherKey Selection</p>
                    </div>

                    <div className="mt-6 ">
                        <h2 className="text-2xl  font-bold text-zinc-100">Create Your Secure <br /> Identity</h2>
                        <p className="text-[11px]">Start your journey to encrypted communication. <br /> All messages are locally coded</p>
                    </div>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-[16px] uppercase tracking-widest text-green-500 mb-2 mt-4 font-bold">Username</label>
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
                            <label className="block text-[16px] uppercase tracking-widest text-green-500 mb-2 font-bold">Secure Email</label>
                            <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500">🔒</span>
                                <input
                                    type="password"
                                    placeholder="example@gmail.com"
                                    className="w-full bg-zinc-800/50 border border-zinc-700 rounded p-3 pl-8 text-sm focus:outline-none focus:border-green-600  transition-colors"
                                />
                            </div>
                        </div>

                        <button type="button"
                            onClick={() => onNext()} className="w-full bg-green-900 hover:bg-green-500 text-white font-bold py-3 px-4 rounded flex items-center justify-center gap-2 uppercase tracking-tighter shadow-lg 
box-shadow: var(--shadow-sm); ">
                            <span>➜</span> Create Cipher Key
                        </button>
                    </form>

                </div>




            </div >

        </>
    )
}

export default Setup;

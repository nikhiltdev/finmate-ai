import React, { useState } from "react";
import { chatAction } from "../../state/chatActions";
import { addMessage } from "../../state/chatSlice";
import { useDispatch, useSelector } from "react-redux";

function Chat() {
    const dispatch = useDispatch();

    const { messages, isLoading, error } = useSelector(
        (state) => state.chat
    );

    const [input, setInput] = useState("");

    const handleSend = (e) => {
        e.preventDefault();

        if (!input.trim() || isLoading) {
            return;
        }

        const prompt = input.trim();

        // Add user message immediately
        dispatch(
            addMessage({
                id: Date.now(),
                sender: "user",
                text: prompt
            })
        );

        // Send message to backend
        dispatch(
            chatAction({
                prompt
            })
        );

        // Clear input
        setInput("");
    };

    return (
        <div className="flex flex-col h-screen w-full bg-[#0B0F19] text-[#dfe2f1] font-['Plus_Jakarta_Sans',sans-serif] relative overflow-hidden">

            {/* Ambient Canvas Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Chat Header */}
            <header className="relative z-10 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/[0.08] px-4 py-3.5 sm:px-6 shrink-0">

                <div className="max-w-[900px] mx-auto flex items-center justify-between">

                    <div>

                        <div className="flex items-center gap-2">

                            <h1 className="text-lg font-bold text-[#F9FAFB] tracking-tight leading-tight">
                                FinMate <span className="text-[#10B981]">AI</span>
                            </h1>

                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30">
                                Online
                            </span>

                        </div>

                        <p className="text-xs text-[#9CA3AF] mt-0.5">
                            Your personal finance assistant
                        </p>

                    </div>

                </div>

            </header>

            {/* Chat Messages Area */}
            <main className="relative z-10 flex-1 overflow-y-auto px-4 py-6 sm:px-6">

                <div className="max-w-[900px] mx-auto w-full space-y-5 flex flex-col">

                    {messages.map((msg) => {

                        const isGemini = msg.sender === "gemini";

                        return (
                            <div
                                key={msg.id}
                                className={`flex items-start gap-3 w-full ${
                                    isGemini
                                        ? "justify-start"
                                        : "justify-end"
                                }`}
                            >

                                {/* Gemini Avatar */}
                                {isGemini && (
                                    <div className="w-8 h-8 rounded-full bg-[#171b26] border border-[#10B981]/30 text-[#10B981] flex items-center justify-center font-bold text-xs shrink-0 select-none shadow-[0_0_12px_rgba(16,185,129,0.2)]">
                                        F
                                    </div>
                                )}

                                {/* Message Bubble */}
                                <div
                                    className={`max-w-[85%] sm:max-w-[75%] px-4 py-3 text-sm leading-relaxed rounded-2xl ${
                                        isGemini
                                            ? "bg-[#171b26]/90 border border-white/[0.08] text-[#dfe2f1] rounded-tl-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md"
                                            : "bg-[#10B981] text-[#003824] font-medium rounded-tr-sm shadow-[0_4px_20px_rgba(16,185,129,0.25)]"
                                    }`}
                                >
                                    {msg.text}
                                </div>

                            </div>
                        );
                    })}

                    {/* Loading message */}
                    {isLoading && (
                        <div className="flex items-start gap-3">

                            <div className="w-8 h-8 rounded-full bg-[#171b26] border border-[#10B981]/30 text-[#10B981] flex items-center justify-center font-bold text-xs">
                                F
                            </div>

                            <div className="bg-[#171b26]/90 border border-white/[0.08] px-4 py-3 rounded-2xl rounded-tl-sm text-sm text-[#9CA3AF]">
                                FinMate is thinking...
                            </div>

                        </div>
                    )}

                    {/* Error */}
                    {error && (
                        <div className="text-red-400 text-sm text-center">
                            {error}
                        </div>
                    )}

                </div>

            </main>

            {/* Message Input */}
            <footer className="relative z-10 bg-[#0B0F19]/80 backdrop-blur-xl border-t border-white/[0.08] px-4 py-3 sm:px-6 shrink-0">

                <div className="max-w-[900px] mx-auto w-full">

                    <form
                        onSubmit={handleSend}
                        className="relative flex items-center"
                    >

                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask FinMate anything..."
                            className="w-full bg-[#111827]/70 border border-white/[0.08] text-[#F9FAFB] placeholder-[#6B7280] text-sm rounded-full pl-5 pr-24 py-3 focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all backdrop-blur-md"
                        />

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="absolute right-2 px-4 py-1.5 bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed text-[#003824] text-xs font-semibold rounded-full shadow-[0_0_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_16px_rgba(16,185,129,0.45)] transition-all cursor-pointer"
                        >
                            {isLoading ? "..." : "Send"}
                        </button>

                    </form>

                    <p className="text-[11px] text-[#6B7280] text-center mt-2.5 font-normal">
                        FinMate AI can make mistakes. Check important financial information.
                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Chat;
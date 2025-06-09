
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChatMessage } from '../../types';
import { generateText } from '../../services/geminiService';
import { PaperAirplaneIcon, CloseIcon, AiIcon } from '../ui/Icons';

interface AiAssistantProps {
  resumeContext: string;
  onClose: () => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ resumeContext, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initial greeting is now simpler as per standard practice, context is available for first query.
  useEffect(() => {
    setMessages([{ sender: 'ai', text: "Hello! I'm Nithin's AI Resume Assistant. Ask me anything about his qualifications!" }]);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = useCallback(async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    // Construct prompt for Gemini, including resume context and conversation history.
    // This allows the AI to have context of the ongoing conversation.
    const historyForPrompt = messages
      .map(msg => `${msg.sender === 'user' ? 'User' : 'Assistant'}: ${msg.text}`)
      .join('\n');
      
    const fullPrompt = `You are Nithin Kummari's helpful AI Resume Assistant. Your primary goal is to answer questions based *only* on the provided resume information. Be concise, professional, and positive. If a question cannot be answered using the resume, politely state that you only have access to resume information. Do not invent or infer information beyond what's given.

Resume Data:
---
${resumeContext}
---

Current Conversation:
${historyForPrompt}
User: ${userMessage.text}
Assistant:`;
    
    try {
      const aiResponseText = await generateText(fullPrompt);
      const aiMessage: ChatMessage = { sender: 'ai', text: aiResponseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error in AI response:", error);
      const aiErrorMessage: ChatMessage = { sender: 'ai', text: "Sorry, I encountered an issue. Please try again." };
      setMessages(prev => [...prev, aiErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, resumeContext, messages]);


  return (
    <div 
      className={`fixed inset-0 md:inset-auto md:bottom-20 md:right-6 bg-slate-900/80 backdrop-blur-md md:rounded-lg shadow-2xl flex flex-col z-[60] transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        w-full h-full md:w-[380px] md:h-[550px]
      `}
      aria-modal="true"
      role="dialog"
      aria-labelledby="ai-assistant-header"
    >
      <header className="flex items-center justify-between p-4 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <AiIcon className="w-6 h-6 text-blue-400" />
          <h3 id="ai-assistant-header" className="text-lg font-semibold text-slate-100">AI Resume Assistant</h3>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors" aria-label="Close chat">
          <CloseIcon className="w-6 h-6" />
        </button>
      </header>

      <div ref={chatContainerRef} className="flex-grow p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] p-3 rounded-xl shadow ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-slate-700 text-slate-200 rounded-bl-none'
              }`}
            >
              {msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                  const match = part.match(/\[(.*?)\]\((.*?)\)/);
                  if (match) {
                      return <a key={i} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-blue-300 underline hover:text-blue-200">{match[1]}</a>;
                  }
                  return <span key={i}>{part}</span>;
              })}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-700 text-slate-200 p-3 rounded-xl rounded-bl-none shadow flex items-center space-x-2">
              <span className="sr-only">Thinking...</span>
              <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="h-2 w-2 bg-slate-300 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Nithin's resume..."
            className="flex-grow bg-slate-800 border border-slate-600 text-slate-100 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow disabled:opacity-70"
            disabled={isLoading}
            aria-label="Chat input"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed transition-colors"
            aria-label="Send message"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AiAssistant;
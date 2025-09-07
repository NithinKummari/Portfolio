
import React, { useState, useRef, useEffect, useCallback } from 'react';
import type { CommandHistory } from '../types';
import { processCommand } from '../utils/commandProcessor';
import { WelcomeMessage } from './WelcomeMessage';

const Prompt: React.FC = () => (
  <div className="flex-shrink-0">
    <span className="text-terminal-green">nithin@portfolio</span>
    <span className="text-terminal-violet">:$ ~ </span>
  </div>
);

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [input, setInput] = useState('');
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [commandId, setCommandId] = useState(0);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = useCallback((command: string) => {
    if (command.toLowerCase() === 'clear') {
      setHistory([]);
    } else {
      const output = processCommand(command);
      const newHistoryEntry: CommandHistory = {
        id: commandId,
        command,
        output,
      };
      setHistory((prev) => [...prev, newHistoryEntry]);
      setCommandId(prev => prev + 1);
    }
  }, [commandId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
    } else {
       const emptyEntry: CommandHistory = {
        id: commandId,
        command: '',
        output: '',
      };
      setHistory((prev) => [...prev, emptyEntry]);
      setCommandId(prev => prev + 1);
    }
    setInput('');
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      className="w-full h-screen p-4 overflow-y-auto"
      onClick={focusInput}
    >
      <WelcomeMessage />
      {history.map((item) => (
        <div key={item.id} className="mb-2 animate-fadeIn">
          <div className="flex flex-row space-x-2">
            <Prompt />
            <span className="flex-1 text-terminal-cyan">{item.command}</span>
          </div>
          <div className="mt-1">{item.output}</div>
        </div>
      ))}

      <form onSubmit={handleSubmit} className="flex flex-row space-x-2">
        <Prompt />
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-transparent border-none outline-none flex-1 text-terminal-text w-full cursor-blink"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
        />
      </form>

      <div ref={terminalEndRef} />
    </div>
  );
};

export default Terminal;

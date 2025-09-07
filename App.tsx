
import React from 'react';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  return (
    <div className="bg-terminal-bg text-terminal-text min-h-screen font-terminal">
      <Terminal />
    </div>
  );
};

export default App;

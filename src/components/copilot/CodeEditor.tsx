import React from 'react';

const CodeEditor = () => {
  return (
    <div className="rounded-lg overflow-hidden bg-[#0D1117] border border-gray-700">
      <div className="flex items-center px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex space-x-2">
          <span className="text-sm text-gray-400">game.ts</span>
          <span className="text-sm text-gray-400">characters.module.css</span>
          <span className="text-sm text-gray-400">bonus-level.ts</span>
        </div>
      </div>
      <div className="p-4">
        <pre className="text-sm font-mono">
          <code className="text-gray-300">
            {`// Create score texts
this.player1ScoreText = this.add.text(16, 16, 'Player 1: 0', { fontSize: '32px' });
this.player2ScoreText = this.add.text(400, 16, 'Player 2: 0', { fontSize: '32px' });

update() {
  // Player 1 controls
  if (this.cursors.left.isDown) {
    this.player1.setVelocityX(-200);
  } else if (this.cursors.right.isDown) {
    this.player1.setVelocityX(200);
  } else {
    this.player1.setVelocityX(0);
  }`}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;
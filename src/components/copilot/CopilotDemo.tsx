import React from 'react';
import CodeEditor from './CodeEditor';
import ChatWindow from './ChatWindow';

const CopilotDemo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <ChatWindow />
          </div>
          <div className="lg:col-span-8">
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CopilotDemo;
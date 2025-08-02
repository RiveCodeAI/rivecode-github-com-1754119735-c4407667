export interface ChatMessage {
  id: string;
  content: string;
  sender: 'user' | 'copilot';
  timestamp: Date;
}

export interface CodeSnippet {
  id: string;
  filename: string;
  content: string;
  language: string;
}

export interface CopilotSuggestion {
  id: string;
  description: string;
  code: string;
  confidence: number;
}
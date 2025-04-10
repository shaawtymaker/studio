"use client";

import { useFlow, startFlow, FlowResult } from "genkit";
import { useState, useEffect } from "react";
import { summarizeSpending } from "@/ai/flows/summarize-spending";

function ExpenseChatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  useEffect(() => {
    if (messages.length > 0) {
      startFlow(summarizeSpending, {messages: messages}).then(
        (result: FlowResult<string>) => {
          setMessages([...messages, result.result]);
        }
      );
    }
  }, [messages]);

  return (
    <div className="p-4 rounded-md border border-solid ">
      <h2>Expense Chatbot</h2>
      <div className="h-[400px] overflow-y-auto ">
        <h3>Conversation</h3>
        {messages.map((message, index) => (
          <p className="mb-2" key={index}>
            {message}
          </p>
        ))}
      </div>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <input type="text" className="p-2 rounded-md border border-solid" value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" className="p-2 rounded-md border border-solid bg-blue-500 text-white">
          Send
        </button>
      </form>
    </div>
  );
} 


export default ExpenseChatbot;

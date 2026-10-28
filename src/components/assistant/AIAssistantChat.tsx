import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, CheckCircle2, ShieldAlert, ArrowRight, CornerDownLeft, RefreshCw } from 'lucide-react';
import { AIChatMessage } from '../../types';
import { DEMO_PREDEFINED_QUERIES, getAssistantResponse } from '../../data/aiAssistantKnowledge';

export const AIAssistantChat: React.FC = () => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'assistant',
      timestamp: '10:00 AM',
      text: 'Hello! I am GrowthPilots AI Assistant (Demo Edition). I can query our commercial sales records, analyze quarterly target pacing, and draft operational follow-ups. Click any sample prompt below or type your question.',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: AIChatMessage = {
      id: 'user-' + Date.now(),
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      text: text,
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const assistantMsg = getAssistantResponse(text);
      setMessages(prev => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleApproveAction = (messageId: string) => {
    setMessages(prev =>
      prev.map(m =>
        m.id === messageId
          ? {
              ...m,
              isApproved: true,
              text: `${m.text}\n\n✓ ACTION AUTHORIZED: Human administrator approved execution. Task queued for processing.`,
            }
          : m
      )
    );
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'assistant',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        text: 'Session reset. What business metric or sales insight would you like to explore?',
      },
    ]);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-md flex flex-col h-[650px] overflow-hidden">
      {/* Top Header */}
      <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-purple-600 flex items-center justify-center text-white shadow">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">GrowthPilots Executive Query Agent</h3>
              <span className="text-[10px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full">
                Sandbox Mode
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Grounded on Fictional Enterprise Sales & Quota Dataset (Q1-Q3 2026)
            </p>
          </div>
        </div>

        <button
          onClick={handleResetChat}
          className="text-xs text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-slate-800 transition-colors flex items-center gap-1"
          title="Reset conversation"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="p-3 bg-slate-50 border-b border-slate-200/80">
        <div className="flex items-center gap-2 mb-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
          <span>Quick Sample Queries:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {DEMO_PREDEFINED_QUERIES.map(q => (
            <button
              key={q.id}
              onClick={() => handleSendMessage(q.question)}
              className="text-xs bg-white hover:bg-blue-50 text-slate-700 hover:text-brand-blue font-medium px-3 py-1.5 rounded-lg border border-slate-200 transition-all shadow-2xs hover:border-blue-300"
            >
              {q.question}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Feed */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/40">
        {messages.map(msg => {
          const isUser = msg.sender === 'user';

          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${isUser ? 'ml-auto flex-row-reverse' : ''}`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-semibold ${
                  isUser
                    ? 'bg-slate-900 text-white'
                    : 'bg-gradient-to-tr from-brand-blue to-purple-600 text-white shadow-xs'
                }`}
              >
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                  isUser
                    ? 'bg-brand-blue text-white rounded-tr-none shadow-xs'
                    : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none shadow-xs space-y-3'
                }`}
              >
                <div className="whitespace-pre-line">{msg.text}</div>

                {/* Structured Data: KPI Grid */}
                {msg.structuredData?.type === 'kpis' && msg.structuredData.kpis && (
                  <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-100">
                    {msg.structuredData.kpis.map((kpi, i) => (
                      <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/70">
                        <span className="text-[10px] font-semibold text-slate-500 uppercase block">
                          {kpi.label}
                        </span>
                        <span className="text-sm font-bold text-slate-900 block mt-0.5">
                          {kpi.value}
                        </span>
                        {kpi.note && (
                          <span className="text-[10px] text-emerald-600 font-medium">{kpi.note}</span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Structured Data: Table */}
                {msg.structuredData?.type === 'table' &&
                  msg.structuredData.headers &&
                  msg.structuredData.rows && (
                    <div className="mt-2 pt-2 border-t border-slate-100 overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-[10px]">
                            {msg.structuredData.headers.map((h, i) => (
                              <th key={i} className="pb-1.5 pr-3">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-medium">
                          {msg.structuredData.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="py-1.5 pr-3 text-slate-800">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                {/* Consequential Action / Human Authorization Gate */}
                {msg.requiresApproval && (
                  <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-slate-800 space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800">
                      <ShieldAlert className="w-4 h-4 text-amber-600" />
                      <span>Human Approval Required (Action Gate)</span>
                    </div>
                    <p className="text-xs text-amber-900">
                      Proposed Consequential Action: <strong>{msg.approvalAction}</strong>
                    </p>
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        onClick={() => handleApproveAction(msg.id)}
                        disabled={msg.isApproved}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                          msg.isApproved
                            ? 'bg-emerald-600 text-white cursor-default'
                            : 'bg-amber-600 hover:bg-amber-700 text-white shadow-xs'
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{msg.isApproved ? 'Action Authorized' : 'Approve & Execute Action'}</span>
                      </button>
                    </div>
                  </div>
                )}

                <div
                  className={`text-[10px] mt-1 ${
                    isUser ? 'text-blue-100 text-right' : 'text-slate-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex gap-3 max-w-[80%]">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-brand-blue to-purple-600 text-white flex items-center justify-center text-xs">
              <Bot className="w-4 h-4" />
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-500 text-xs flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-bounce" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce delay-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-bounce delay-200" />
              <span>Analyzing business ledger...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-white border-t border-slate-200">
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Ask about sales, regional targets, products, or follow-ups..."
            className="flex-1 text-sm bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-3 rounded-xl bg-brand-blue hover:bg-brand-blue-hover text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm flex items-center justify-center"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
        <p className="text-[11px] text-slate-400 text-center mt-2">
          Demonstration engine using verified fictional sales data. Consequential actions require human confirmation.
        </p>
      </div>
    </div>
  );
};

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  RefreshCw,
  Maximize2,
  MoreVertical,
  Paperclip,
  Send,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Bot,
} from "lucide-react";
import { useAuth } from "../../Hooks/useAuth";

const defaultMessages = [
  {
    id: 1,
    sender: "ai",
    text: "Hi Nilesh! 👋\nI can help you organize, validate and fix your documents. You can upload files, ask questions, or request changes. What would you like to do today?",
    time: "10:24 AM",
  },
  {
    id: 2,
    sender: "user",
    text: "Can you check if my uploaded documents meet the SSC CGL 2026 requirements?",
    time: "10:25 AM",
  },
  {
    id: 3,
    sender: "ai",
    text: "I've analyzed your documents. Here's the summary:\n\n• 10 Documents are valid\n• 1 Document needs attention\n• 1 Document is processing\n\nYour application is 92% complete. 🎉\nWould you like me to help fix the document that needs attention?",
    time: "10:25 AM",
  },
];

const quickActions = [
  "Show missing requirements",
  "Fix declaration document",
  "Convert all to PDF",
  "What's next?",
  "Tell me about SSC CGL",
];

const AIAssistant = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState(defaultMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = typeof textToSend === "string" ? textToSend : inputValue;
    if (!text.trim()) return;

    const newMsg = {
      id: Date.now(),
      sender: "user",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    // AI Response simulation
    setTimeout(() => {
      let replyText = "";
      if (text.includes("Fix declaration")) {
        replyText =
          "I have adjusted the Handwritten Declaration to 800×400 px, 300 DPI and cropped the whitespace. The document now passes all SSC CGL requirements! Would you like me to save it?";
      } else if (text.includes("missing requirements")) {
        replyText =
          "All mandatory documents are present! The only item pending verification is the Aadhaar Card front copy, which is currently in processing.";
      } else if (text.includes("Convert all to PDF")) {
        replyText =
          "I can convert all your JPG/PNG files into standard high-resolution PDF format (300 DPI) right now. Click confirm to proceed!";
      } else if (text.includes("SSC CGL")) {
        replyText =
          "SSC CGL 2026 requires passport photos taken within 3 months (20-50 KB), clear signatures in black ink (10-20 KB), and 10th/12th certificates in PDF/JPG format.";
      } else {
        replyText = `I'm analyzing that for you! All your documents are safe with Formio. Let me know if you need automated resizing, DPI adjustment, or ZIP export.`;
      }

      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        text: replyText,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, aiReply]);
      setIsTyping(false);
    }, 900);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const userAvatar =
    user?.photoURL ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80";

  return (
    <aside className="dashboard-ai-assistant">
      {/* Header */}
      <div className="ai-panel-header">
        <div className="ai-header-left">
          <div className="ai-icon-badge">
            <Bot size={16} />
          </div>
          <h2 className="ai-panel-title">AI Assistant</h2>
          <span className="ai-beta-tag">Beta</span>
        </div>

        <div className="ai-header-actions">
          <button className="ai-header-action-btn" title="Expand panel">
            <Maximize2 size={15} />
          </button>
          <button
            className="ai-header-action-btn"
            title="Refresh chat"
            onClick={() => setMessages(defaultMessages)}
          >
            <RefreshCw size={15} />
          </button>
          <button className="ai-header-action-btn" title="Options">
            <MoreVertical size={15} />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="ai-chat-messages-container">
        {messages.map((msg) => {
          const isAI = msg.sender === "ai";
          return (
            <motion.div
              key={msg.id}
              className={`chat-message-row ${isAI ? "ai-row" : "user-row"}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isAI && (
                <div className="ai-chat-avatar">
                  <Bot size={16} />
                </div>
              )}

              <div className="chat-bubble-wrap">
                <div className={`chat-bubble ${isAI ? "ai-bubble" : "user-bubble"}`}>
                  <p className="bubble-text">{msg.text}</p>
                </div>
                <span className="chat-timestamp">{msg.time}</span>
              </div>

              {!isAI && (
                <img
                  src={userAvatar}
                  alt="User"
                  className="user-chat-avatar"
                />
              )}
            </motion.div>
          );
        })}

        {isTyping && (
          <div className="chat-message-row ai-row">
            <div className="ai-chat-avatar">
              <Bot size={16} />
            </div>
            <div className="chat-bubble ai-bubble typing-dots">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Action Suggestion Chips */}
      <div className="ai-quick-actions-bar">
        {quickActions.map((action) => (
          <motion.button
            key={action}
            className="ai-suggestion-chip"
            onClick={() => handleSend(action)}
            whileHover={{ scale: 1.02, backgroundColor: "#eff6ff" }}
            whileTap={{ scale: 0.98 }}
          >
            {action}
          </motion.button>
        ))}
      </div>

      {/* Chat Input */}
      <div className="ai-input-wrapper">
        <div className="ai-input-box">
          <button className="ai-attach-btn" title="Attach document">
            <Paperclip size={18} />
          </button>
          <input
            type="text"
            className="ai-text-input"
            placeholder="Ask me anything about your documents..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <motion.button
            className="ai-send-btn"
            onClick={() => handleSend()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.94 }}
          >
            <Send size={15} />
          </motion.button>
        </div>
        <span className="ai-disclaimer-text">
          AI can make mistakes. Please verify important information.
        </span>
      </div>
    </aside>
  );
};

export default AIAssistant;
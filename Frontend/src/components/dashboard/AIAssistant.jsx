import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Maximize2,
  MoreVertical,
  Paperclip,
  Send,
  Bot,
} from "lucide-react";

import { useAuth } from "../../Hooks/useAuth";
import { getDocuments } from "../../services/documentService";

const quickActions = [
  "Show missing requirements",
  "Fix declaration document",
  "Convert all to PDF",
  "What's next?",
  "Tell me about SSC CGL",
];

const AIAssistant = () => {
  const { user } = useAuth();

  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /*
   * Load only the logged-in user's documents
   */
  useEffect(() => {
    const loadDocuments = async () => {
      try {
        setLoading(true);

        const response = await getDocuments();

        setDocuments(response.data || []);
      } catch (error) {
        console.error("Failed to load documents:", error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadDocuments();
    }
  }, [user]);

  /*
   * Scroll whenever messages change
   */
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  /*
   * Send message to backend AI
   */
  const handleSend = async (textToSend) => {
    const text =
      typeof textToSend === "string"
        ? textToSend
        : inputValue;

    if (!text.trim()) return;

    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newMsg = {
      id: Date.now(),
      sender: "user",
      text,
      time: currentTime,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      /*
       * Send user's question + current user's documents
       * to your backend.
       */
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/ai/chat`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: text,
            documents,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "AI request failed"
        );
      }

      const aiReply = {
        id: Date.now() + 1,
        sender: "ai",
        text:
          data.data?.message ||
          data.message ||
          "I couldn't generate a response.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
      console.error("AI chat error:", error);

      const errorMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text:
          "Sorry, I couldn't process your request right now. Please try again.",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [
        ...prev,
        errorMessage,
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /*
   * User avatar comes from Firebase user
   */
  const userAvatar = user?.photoURL;

  /*
   * New user = no documents
   */
  const isNewUser = documents.length === 0;

  return (
    <aside className="dashboard-ai-assistant">

      {/* Header */}
      <div className="ai-panel-header">

        <div className="ai-header-left">

          <div className="ai-icon-badge">
            <Bot size={16} />
          </div>

          <h2 className="ai-panel-title">
            AI Assistant
          </h2>

          <span className="ai-beta-tag">
            Beta
          </span>

        </div>

        <div className="ai-header-actions">

          <button
            className="ai-header-action-btn"
            title="Expand panel"
          >
            <Maximize2 size={15} />
          </button>

          <button
            className="ai-header-action-btn"
            title="Refresh chat"
            onClick={() => setMessages([])}
          >
            <RefreshCw size={15} />
          </button>

          <button
            className="ai-header-action-btn"
            title="Options"
          >
            <MoreVertical size={15} />
          </button>

        </div>
      </div>

      {/* Messages */}
      <div className="ai-chat-messages-container">

        {/* New user empty state */}
        {!loading && isNewUser && messages.length === 0 && (

          <motion.div
            className="ai-empty-state"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            <div className="ai-chat-avatar">
              <Bot size={16} />
            </div>

            <div className="chat-bubble-wrap">

              <div className="chat-bubble ai-bubble">

                <p className="bubble-text">

                  Hi{" "}
                  {user?.name ||
                    user?.displayName ||
                    "there"}{" "}
                  👋

                  <br />
                  <br />

                  I can help you organize,
                  validate and prepare your
                  documents.

                  <br />
                  <br />

                  Upload your documents and
                  I'll analyze them for you.

                </p>

              </div>

            </div>

          </motion.div>
        )}

        {/* Existing conversation */}
        {messages.map((msg) => {

          const isAI =
            msg.sender === "ai";

          return (
            <motion.div
              key={msg.id}
              className={`chat-message-row ${
                isAI
                  ? "ai-row"
                  : "user-row"
              }`}
              initial={{
                opacity: 0,
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
              }}
            >

              {isAI && (
                <div className="ai-chat-avatar">
                  <Bot size={16} />
                </div>
              )}

              <div className="chat-bubble-wrap">

                <div
                  className={`chat-bubble ${
                    isAI
                      ? "ai-bubble"
                      : "user-bubble"
                  }`}
                >

                  <p className="bubble-text">
                    {msg.text}
                  </p>

                </div>

                <span className="chat-timestamp">
                  {msg.time}
                </span>

              </div>

              {!isAI && userAvatar && (
                <img
                  src={userAvatar}
                  alt={
                    user?.name ||
                    user?.displayName ||
                    "User"
                  }
                  className="user-chat-avatar"
                />
              )}

            </motion.div>
          );
        })}

        {/* Typing */}
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

      {/* Quick Actions */}
      <div className="ai-quick-actions-bar">

        {quickActions.map((action) => (

          <motion.button
            key={action}
            className="ai-suggestion-chip"
            onClick={() =>
              handleSend(action)
            }
            whileHover={{
              scale: 1.02,
              backgroundColor: "#eff6ff",
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            {action}
          </motion.button>

        ))}

      </div>

      {/* Input */}
      <div className="ai-input-wrapper">

        <div className="ai-input-box">

          <button
            className="ai-attach-btn"
            title="Attach document"
          >
            <Paperclip size={18} />
          </button>

          <input
            type="text"
            className="ai-text-input"
            placeholder="Ask me anything about your documents..."
            value={inputValue}
            onChange={(e) =>
              setInputValue(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

          <motion.button
            className="ai-send-btn"
            onClick={() => handleSend()}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.94,
            }}
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
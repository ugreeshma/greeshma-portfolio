import { useEffect, useRef } from "react";

const Chatbot = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

    const handleLoad = () => {
      iframe.contentWindow?.postMessage(
        {
          type: "PARENT_ORIGIN",
          origin: window.location.origin,
        },
        "https://chat-widget.sicada.ai/06a7216f-3a7f-75b8-8000-e81e525b5359?type=chat"
      );
    };

    const handleMessage = (e) => {
      if (!iframe || e.source !== iframe.contentWindow) return;

      if (e.data?.type === "widget:resize") {
        iframe.style.width = e.data.width;
        iframe.style.height = e.data.height;
      }
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("message", handleMessage);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      id="widget-iframe"
      src="https://chat-widget.sicada.ai/06a7216f-3a7f-75b8-8000-e81e525b5359?type=chat"
      title="Portfolio Chatbot"
      allow="microphone; camera; autoplay"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "260px",
        height: "76px",
        border: "none",
        zIndex: 999999,
      }}
    />
  );
};

export default Chatbot;

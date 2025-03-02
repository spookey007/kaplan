import { useEffect } from "react";

const ThreeCXChat = () => {
  useEffect(() => {
    // Load 3CX chat script
    const script = document.createElement("script");
    script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
    script.defer = true;
    script.charset = "utf-8";
    script.id = "tcx-callus-js";

    document.body.appendChild(script);

    // Create chat widget
    const chatWidget = document.createElement("call-us-selector");

    chatWidget.setAttribute("phonesystem-url", "https://1592.3cx.cloud");
    chatWidget.setAttribute("party", "LiveChat585452");


    document.body.appendChild(chatWidget);

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script);
      document.body.removeChild(chatWidget);
    //   const poweredByText = document.querySelector(".powered-by_Qe9aP");
    // setTimeout(() => {
      
    //   if (poweredByText) {
    //     poweredByText.remove();
    //     console.log("Powered by 3CX removed");
    //   }
    // }, 3000);
    };
  }, []);

  return null; // No visible UI, just injects the chat widget
};

export default ThreeCXChat; // Ensure it's exported as default

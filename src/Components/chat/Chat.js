import React from "react";
import "./Chat.css";
import ChatHeader from "../chatHeader/ChatHeader";
import ChatBody from "../chatBody/ChatBody";
import ChatInput from "../chatInput/ChatInput";

function Chat({ isDark }) {
	return (
		<div className={isDark ? "chat chatDark" : "chat"}>
			<ChatHeader isDark={isDark} />
			<ChatBody isDark={isDark} />
			<ChatInput isDark={isDark} />
		</div>
	);
}

export default Chat;

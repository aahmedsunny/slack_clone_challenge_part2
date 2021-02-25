import React from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import "./ChatInput.css";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import CodeIcon from "@material-ui/icons/Code";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";

const ChatInput = ({ isDark }) => {
	const sendMsg = e => {
		e.preventDefault();
	};

	return (
		<div className={isDark ? "chatInput chatInputDark" : "chatInput"}>
			<form onSubmit={sendMsg}>
				<input type="text" placeholder="Enter your message here..." />
				<IconButton
					className={
						isDark
							? "chatInput__btnContainer chatInputDark__btnContainer"
							: "chatInput__btnContainer"
					}
					type="submit"
				>
					<SendIcon />
				</IconButton>
			</form>

			<div className="chatInput__icons">
				<div className="chatInput__iconsLeft">
					<IconButton className="chatInput__icon">
						<FormatBoldIcon />
					</IconButton>
					<IconButton className="chatInput__icon">
						<FormatItalicIcon />
					</IconButton>
					<IconButton className="chatInput__icon">
						<CodeIcon />
					</IconButton>
					<IconButton className="chatInput__icon">
						<AttachFileIcon />
					</IconButton>
					<IconButton className="chatInput__icon">
						<FormatListBulletedIcon />
					</IconButton>
					<IconButton className="chatInput__icon">
						<FormatListNumberedIcon />
					</IconButton>
				</div>
				<div className="chatInput__iconsRight">
					<IconButton className="chatInput__icon">
						<AlternateEmailIcon />
					</IconButton>
					<IconButton className="chatInput__icon">
						<InsertEmoticonIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default ChatInput;

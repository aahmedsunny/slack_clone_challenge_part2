import React from "react";
import "./Message.css";

const Message = ({ isDark, name, imgUrl, time, text }) => {
	return (
		<div className="message">
			<img className="message__userImg" src={imgUrl} alt="" />
			<div
				className={
					isDark
						? "message__textContainer messageDark__textContainer"
						: "message__textContainer"
				}
			>
				<div className="message__userName">
					{name} <span>{time}</span>
				</div>
				<div className="message__text">{text}</div>
			</div>
		</div>
	);
};

export default Message;

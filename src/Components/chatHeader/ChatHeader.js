import React from "react";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import "./ChatHeader.css";

const ChatHeader = ({ isDark }) => {
	return (
		<div
			className={isDark ? "chatHeader chatHeaderDark" : "chatHeader"}
		>
			<div className="chatHeader__infoContainer">
				<div className="chatHeader__title">
					# clever
					<StarOutlineIcon fontSize="small" />
				</div>
				<div
					className={
						isDark
							? "chatHeader__desc chatHeaderDark__desc"
							: "chatHeader__desc"
					}
				>
					Company-wise announcements and work-based matters
				</div>
			</div>

			<div
				className={
					isDark
						? "chatHeader__details chatHeaderDark__details"
						: "chatHeader__details"
				}
			>
				<span>Details</span>
				<ErrorOutlineIcon />
			</div>
		</div>
	);
};

export default ChatHeader;

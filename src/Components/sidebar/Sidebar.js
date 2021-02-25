import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../../data/sidebarData";
import AddIcon from "@material-ui/icons/Add";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./Sidebar.css";
import db from "../../firebase";

const Sidebar = ({ isDark, rooms }) => {
	const addChannel = () => {
		const channelName = prompt("Enter the channel name:");
		console.log(channelName);

		channelName && db.collection("rooms").add({ name: channelName });
	};

	return (
		<div className={isDark ? "sidebar sidebarDark" : "sidebar"}>
			<div
				className={
					isDark
						? "sidebar__workspace sidebarDark__workspace"
						: "sidebar__workspace"
				}
			>
				<div className="sidebar__workspaceName">Clever Programmer</div>
				<div
					className={
						isDark
							? "sidebar__workspaceNewMsg sidebarDark__workspaceNewMsg"
							: "sidebar__workspaceNewMsg"
					}
				>
					<AddCircleOutlineIcon />
				</div>
			</div>

			<div className="sidebar__channels">
				{sidebarItemsData.map((item, i) => (
					<div
						className={
							isDark
								? "sidebarDark__channel sidebar__channel"
								: "sidebar__channel"
						}
						key={i}
					>
						{item.icon} {item.text}
					</div>
				))}
			</div>

			<div className="sidebar__bottomChannels">
				<div className="sidebar__newBottomChannel">
					<ArrowDropDownIcon />
					<div> Channels</div>
					<AddIcon
						className="sidebar__addChannelBtn"
						onClick={addChannel}
					/>
				</div>

				<div className="sidebar__bottomChannelsList">
					{rooms?.length > 0 &&
						rooms.map(item => (
							<div
								className={
									isDark
										? "sidebarDark__bottomChannel sidebar__bottomChannel"
										: "sidebar__bottomChannel"
								}
								key={item.id}
							>
								# {item.name}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

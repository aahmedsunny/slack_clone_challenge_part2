import React from "react";
import Message from "../message/Message";
import "./ChatBody.css";

const ChatBody = ({ isDark }) => {
	return (
		<div className="chatBody">
			<Message
				isDark={isDark}
				name={"Rachel Ortiz"}
				imgUrl={"https://randomuser.me/api/portraits/women/17.jpg"}
				time={"11:15 AM"}
				text={"Hello"}
			/>
			<Message
				isDark={isDark}
				name={"Marcus Garcia"}
				imgUrl={"https://randomuser.me/api/portraits/men/5.jpg"}
				time={"11:15 AM"}
				text={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid corporis eaque veniam ipsa iste, minima aspernatur omnis ratione natus dolores at tenetur, pariatur consequatur doloribus non sapiente amet soluta saepe, enim perferendis harum labore asperiores quod! Eius nesciunt rem inventore officiis molestiae alias delectus atque eligendi voluptas veritatis maiores hic, voluptates dicta libero ipsa mollitia rerum quibusdam earum similique?"
				}
			/>
			<Message
				isDark={isDark}
				name={"Audrey Bates"}
				imgUrl={"https://randomuser.me/api/portraits/women/35.jpg"}
				time={"11:15 AM"}
				text={
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis libero quod distinctio blanditiis veniam magnam minus suscipit minima, similique voluptas."
				}
			/>
			<Message
				isDark={isDark}
				name={"Dianne Lawrence"}
				imgUrl={"https://randomuser.me/api/portraits/women/78.jpg"}
				time={"11:15 AM"}
				text={
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem aliquid corporis eaque veniam ipsa iste, minima aspernatur omnis ratione natus dolores at tenetur, pariatur consequatur doloribus non sapiente amet soluta saepe, enim perferendis harum labore asperiores quod! Eius nesciunt rem inventore officiis molestiae alias delectus atque eligendi voluptas veritatis maiores hic, voluptates dicta libero ipsa mollitia rerum quibusdam earum similique?"
				}
			/>
			<Message
				isDark={isDark}
				name={"Rose Hoffman"}
				imgUrl={"https://randomuser.me/api/portraits/women/66.jpg"}
				time={"11:15 AM"}
				text={"Hellllllllllloooooooooo"}
			/>
			<Message
				isDark={isDark}
				name={"Gavin Walker"}
				imgUrl={"https://randomuser.me/api/portraits/men/59.jpg"}
				time={"11:15 AM"}
				text={"Hellllllllllloooooooooo"}
			/>
			<Message
				isDark={isDark}
				name={"Gavin Walker"}
				imgUrl={"https://randomuser.me/api/portraits/men/59.jpg"}
				time={"11:15 AM"}
				text={"Lets GOOOOOOOOOOOOOOOOOOOOOOO"}
			/>
			<Message
				isDark={isDark}
				name={"Gavin Walker"}
				imgUrl={"https://randomuser.me/api/portraits/men/59.jpg"}
				time={"11:15 AM"}
				text={
					"Fireeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
				}
			/>
		</div>
	);
};

export default ChatBody;

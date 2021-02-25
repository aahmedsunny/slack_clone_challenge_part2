import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chat from "./Components/chat/Chat";
import Login from "./Components/login/Login";
import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import db from "./firebase";
import { motion } from "framer-motion";

function App() {
	const [isDark, setIsDark] = useState(false);
	const toggleMode = () => setIsDark(!isDark);
	const [rooms, setRooms] = useState([]);

	const getChannels = () => {
		db.collection("rooms")
			.orderBy("name", "asc")
			.onSnapshot(snapshot =>
				setRooms(
					snapshot.docs.map(doc => {
						return { id: doc.id, name: doc.data().name };
					})
				)
			);
	};

	useEffect(() => {
		getChannels();
	}, []);

	console.log(rooms);

	return (
		<Router>
			<motion.div
				className="app"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ type: "tween", duration: 0.3 }}
			>
				<Header isDark={isDark} toggleMode={toggleMode} />
				<div className="main">
					<Sidebar isDark={isDark} rooms={rooms} />
					<Switch>
						<Route path="/room">
							<Chat isDark={isDark} />
						</Route>
						<Route path="/">
							<Login isDark={isDark} />
						</Route>
					</Switch>
				</div>
			</motion.div>
		</Router>
	);
}

export default App;

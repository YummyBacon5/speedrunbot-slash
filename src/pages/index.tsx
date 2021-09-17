/** @jsx h */
import { h, IS_BROWSER, useData, useEffect, useState } from "../deps.ts";
import { DISCORD_URL } from "../utils.ts";

export default function Home() {
	const [id, setId] = useState("");
	useEffect(() => {
		fetch("/api/discord/bot_info").then((res) => res.json()).then((data) =>
			setId(data.id)
		);
	}, [setId]);
	return (
		<div>
			<h1>Speedrun.bot</h1>
			<p>
				This is the home page of speedrun.bot
			</p>
			<a
				href={`${DISCORD_URL}/authorize?client_id=${id}&scope=applications.commands`}
			>
				Click here to invite the bot!
			</a>
		</div>
	);
}

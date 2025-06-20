import "./app.css";
import { useState } from "react";
import { Game } from "./Game";
import { getVideo } from "./utils";

export const App = () => {
	const [backgroundVideo, setBackgroundVideo] = useState<string>("START");

	return (
		<>
			<video className="background-video" key={backgroundVideo} autoPlay playsInline loop muted>
				<source src={getVideo(backgroundVideo)} type="video/mp4" />
			</video>
			<div className="content">
				<Game setBackgroundVideo={setBackgroundVideo} />
			</div>
		</>
	);
};

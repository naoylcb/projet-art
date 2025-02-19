import { useState } from "react";
import { Player } from "@remotion/player";
import { MyComposition } from "./MyComposition";

type WordsType = {
	[key: string]: [string, string];
};

export const Game = () => {
	const [index, setIndex] = useState<string>("START");
	const [selectedWords, setSelectedWords] = useState<string[]>([]);

	const words: WordsType = {
		START: ["PLAGE", "VILLE"],
		PLAGE: ["EAU", "TOURISTE"],
		VILLE: ["MONUMENT", "BOUTIQUE"],
		EAU: ["BATEAU", "POISSON"],
		TOURISTE: ["AVION", "FAMILLE"],
		MONUMENT: ["STATUE", "BATIMENT"],
		BOUTIQUE: ["NOURRITURE", "SOUVENIRS"],
	};

	const getComposition = () => {
		return <MyComposition selectedWords={selectedWords} />;
	};

	if (index in words) {
		return (
			<div className="words">
				{words[index].map((value) => {
					return (
						<button
							className="words-button"
							key={value}
							onClick={() => {
								setSelectedWords((previous) => [...previous, value]);
								setIndex(value);
							}}
						>
							{value}
						</button>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="result">
				<div className="selected-words">Mots sélectionnés : {selectedWords.join(" - ")}</div>
				<Player component={() => getComposition()} controls fps={30} durationInFrames={270} compositionWidth={1280} compositionHeight={720} />
				<button
					className="reset-button"
					onClick={() => {
						setIndex("START");
						setSelectedWords([]);
					}}
				>
					Recommencer
				</button>
			</div>
		);
	}
};

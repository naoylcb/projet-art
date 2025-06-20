import { Dispatch, SetStateAction, useState } from "react";
import { Player } from "@remotion/player";
import { MyComposition } from "./MyComposition";
import { getVideoDuration } from "./utils";

type WordsType = {
	[key: string]: [string, string];
};

type QuestionsType = {
	[key: string]: string;
};

export const Game = ({ setBackgroundVideo }: { setBackgroundVideo: Dispatch<SetStateAction<string>> }) => {
	const [index, setIndex] = useState<string>("START");
	const [selectedWords, setSelectedWords] = useState<string[]>([]);

	const words: WordsType = {
		START: ["Plonger sous l'eau", "Monter sur le bateau"],
		"Plonger sous l'eau": ["Méduses lumineuses", "Silouhettes humaines"],
		"Monter sur le bateau": ["Sous le pont", "Cabine du capitaine"],
		"Méduses lumineuses": ["Remonter sur le bateau", "Traverser banc des méduses"],
		"Silouhettes humaines": ["Oui", "Non"],
		"Sous le pont": ["Chanter", "Pleurer"],
		"Cabine du capitaine": ["Ecouter", "Rentrer"],
	};

	const questions: QuestionsType = {
		START: "Où veux-tu aller ?",
		"Plonger sous l'eau": "Que veux-tu suivre ?",
		"Monter sur le bateau": "Où aller sur le bateau ?",
		"Méduses lumineuses": "Apparition de la bulle",
		"Silouhettes humaines": "Accepter la main ?",
		"Sous le pont": "Quelle réaction ?",
		"Cabine du capitaine": "Porte fermée, Voix derrière",
	};

	const getComposition = () => {
		const fromNumbers = [0];
		let previous = 0;
		selectedWords.forEach((word) => {
			const frames = getVideoDuration(word) * 30;
			fromNumbers.push(previous + frames);
			previous = previous + frames;
		});
		return <MyComposition selectedWords={selectedWords} fromNumbers={fromNumbers} />;
	};

	const getTotalDuration = (selectedWords: string[]): number => {
		let total = 0;
		selectedWords.forEach((word) => (total += getVideoDuration(word)));
		return 30 * total;
	};

	if (index in words) {
		return (
			<>
				<h1 className="question">{questions[index]}</h1>
				<div className="words">
					{words[index].map((value) => {
						return (
							<button
								className="app-button"
								key={value}
								onClick={() => {
									setSelectedWords((previous) => [...previous, value]);
									setIndex(value);
									setBackgroundVideo(value);
								}}
							>
								<span className="text">{value}</span>
							</button>
						);
					})}
				</div>
			</>
		);
	} else {
		setBackgroundVideo("START");
		return (
			<div className="result">
				<div className="selected-words">Choix : {selectedWords.join(" - ")}</div>
				<Player component={() => getComposition()} controls fps={30} durationInFrames={getTotalDuration(selectedWords)} compositionWidth={1280} compositionHeight={720} />
				<button
					className="reset-button"
					onClick={() => {
						setIndex("START");
						setSelectedWords([]);
					}}
				>
					<span className="text">Recommencer</span>
				</button>
			</div>
		);
	}
};

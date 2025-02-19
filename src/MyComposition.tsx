import { OffthreadVideo, staticFile, Sequence } from "remotion";
import avionVideo from "./assets/avion.mp4";
import bateauVideo from "./assets/bateau.mp4";
import batimentVideo from "./assets/batiment.mp4";
import boutiqueVideo from "./assets/boutique.mp4";
import eauVideo from "./assets/eau.mp4";
import familleVideo from "./assets/famille.mp4";
import monumentVideo from "./assets/monument.mp4";
import nourritureVideo from "./assets/nourriture.mp4";
import plageVideo from "./assets/plage.mp4";
import poissonVideo from "./assets/poisson.mp4";
import souvenirsVideo from "./assets/souvenirs.mp4";
import statueVideo from "./assets/statue.mp4";
import touristeVideo from "./assets/touriste.mp4";
import villeVideo from "./assets/ville.mp4";

export const MyComposition = ({ selectedWords }: { selectedWords: string[] }) => {
	const getVideo = (name: string) => {
		switch (name) {
			case "AVION":
				return avionVideo;
			case "BATEAU":
				return bateauVideo;
			case "BATIMENT":
				return batimentVideo;
			case "BOUTIQUE":
				return boutiqueVideo;
			case "EAU":
				return eauVideo;
			case "FAMILLE":
				return familleVideo;
			case "MONUMENT":
				return monumentVideo;
			case "NOURRITURE":
				return nourritureVideo;
			case "PLAGE":
				return plageVideo;
			case "POISSON":
				return poissonVideo;
			case "SOUVENIRS":
				return souvenirsVideo;
			case "STATUE":
				return statueVideo;
			case "TOURISTE":
				return touristeVideo;
			case "VILLE":
				return villeVideo;
			default:
				return "";
		}
	};

	return (
		<>
			<Sequence from={0} durationInFrames={90}>
				<OffthreadVideo src={staticFile(getVideo(selectedWords[0]))} />
			</Sequence>
			<Sequence from={90} durationInFrames={90}>
				<OffthreadVideo src={staticFile(getVideo(selectedWords[1]))} />
			</Sequence>
			<Sequence from={180} durationInFrames={90}>
				<OffthreadVideo src={staticFile(getVideo(selectedWords[2]))} />
			</Sequence>
		</>
	);
};

import start from "./assets/start.mp4";
import PlongerSousEau from "./assets/plonger_sous_eau.mp4";
import MonterSurBateau from "./assets/monter_sur_bateau.mp4";
import SilouhettesHumaines from "./assets/silouhettes_humaines.mp4";
import SousLePont from "./assets/sous_le_pont.mp4";
import Chanter from "./assets/chanter.mp4";
import HautelVoiePerdue from "./assets/hautel_voie_perdue.mp4";
import MedusesLumineuses from "./assets/meduses_lumineuses.mp4";
import CabineDuCapitaine from "./assets/cabine_du_capitaine.mp4";
import Non from "./assets/non.mp4";
import Pleurer from "./assets/pleurer.mp4";
import Ecouter from "./assets/ecouter.mp4";
import Rentrer from "./assets/rentrer.mp4";

export const getVideo = (name: string): string => {
	switch (name) {
		case "START":
			return start;
		case "Plonger sous l'eau":
			return PlongerSousEau;
		case "Monter sur le bateau":
			return MonterSurBateau;
		case "Méduses lumineuses":
			return MedusesLumineuses;
		case "Silouhettes humaines":
			return SilouhettesHumaines;
		case "Sous le pont":
			return SousLePont;
		case "Cabine du capitaine":
			return CabineDuCapitaine;
		case "Remonter sur le bateau":
			return MonterSurBateau;
		case "Traverser banc des méduses":
			return HautelVoiePerdue;
		case "Oui":
			return MonterSurBateau;
		case "Non":
			return Non;
		case "Chanter":
			return Chanter;
		case "Pleurer":
			return Pleurer;
		case "Ecouter":
			return Ecouter;
		case "Rentrer":
			return Rentrer;
		default:
			return "";
	}
};

export const getVideoDuration = (name: string): number => {
	switch (name) {
		case "START":
			return 10;
		case "Plonger sous l'eau":
			return 18;
		case "Monter sur le bateau":
			return 15;
		case "Méduses lumineuses":
			return 3;
		case "Silouhettes humaines":
			return 14;
		case "Sous le pont":
			return 7;
		case "Cabine du capitaine":
			return 3;
		case "Remonter sur le bateau":
			return 15;
		case "Traverser banc des méduses":
			return 14;
		case "Oui":
			return 15;
		case "Non":
			return 3;
		case "Chanter":
			return 14;
		case "Pleurer":
			return 3;
		case "Ecouter":
			return 3;
		case "Rentrer":
			return 3;
		default:
			return 0;
	}
};

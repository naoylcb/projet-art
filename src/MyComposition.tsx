import { OffthreadVideo, staticFile, Sequence } from "remotion";
import { getVideo, getVideoDuration } from "./utils";

export const MyComposition = ({ selectedWords, fromNumbers }: { selectedWords: string[]; fromNumbers: number[] }) => {
	return (
		<>
			{selectedWords.map((word, index) => {
				const frames = getVideoDuration(word) * 30;
				return (
					<Sequence key={word} from={fromNumbers[index]} durationInFrames={frames}>
						<OffthreadVideo src={staticFile(getVideo(word))} />
					</Sequence>
				);
			})}
		</>
	);
};

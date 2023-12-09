"use client";

import YouTube, { YouTubeProps } from "react-youtube";
import getYouTubeID from "get-youtube-id";

export default function EmbedYT({ link }: { link: string }) {
  const opts: YouTubeProps["opts"] = {
    height: "150",
    width: "410",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
      videoId={getYouTubeID(link) as string}
      opts={opts}
      className="rounded-md"
      loading="lazy"
    />
  );
}

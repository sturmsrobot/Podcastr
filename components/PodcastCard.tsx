import Image from "next/image";
import React from "react";

const PodcastCard = ({
  imgURL,
  title,
  description,
  podcastId,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgURL: string;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        {imgURL ? ( // Prüft, ob imgURL existiert
          <Image
            src={imgURL}
            width={174}
            height={174}
            alt={title}
            className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          />
        ) : (
          <div className="placeholder w-[174px] h-[174px] bg-gray-200 rounded-xl">
            {/* Platzhalter für fehlendes Bild */}
          </div>
        )}
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;

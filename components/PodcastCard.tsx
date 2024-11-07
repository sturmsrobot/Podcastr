import Image from "next/image";
import React from "react";

const PodcastCard = ({
  podcastId,
  title,
  description,
  imgUrl,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgUrl: string;
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgUrl} width={174} height={174} alt={title} />
        <div>
          <h1>{title}</h1>
          <h2>{description}</h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;

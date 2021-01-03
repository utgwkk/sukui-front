import React from "react";
import { Image } from "../types";

interface ImageItemProps {
  image: Image;
}

export const ImageItem = ({ image }: ImageItemProps) => {
  return (
    <div>
      <img
        src={image.urls.thumbnail_url}
        loading="lazy"
        alt={image.comment || undefined}
      />
    </div>
  );
};

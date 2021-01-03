import React from "react";
import { Image } from "../types";

interface ImageItemProps {
  image: Image;
}

export const ImageItem = ({ image }: ImageItemProps) => {
  return (
    <div className="image-item">
      <img
        src={image.urls.thumbnail_url}
        loading="lazy"
        alt={image.comment || undefined}
      />
      <div>{image.created_at}</div>
      {image.urls.source && (
        <div>
          <a href={image.urls.source}>Source</a>
        </div>
      )}
    </div>
  );
};

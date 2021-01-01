import React from "react";
import { Image } from "../types";
import { ImageItem } from "./ImageItem";

interface Props {
  isLoaded: boolean;
  images: Image[];
}

export const ImageList = ({ isLoaded, images }: Props) => {
  return isLoaded ? (
    <div>
      {images.map((image, idx) => <ImageItem image={image} key={idx} />)}
    </div>
  ) : <div>なうろ～でぃんぐ</div>;
};

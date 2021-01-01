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
      {images.length > 0
        ? images.map((image, idx) => <ImageItem image={image} key={idx} />)
        : "画像はありません"}
    </div>
  ) : (
    <div>なうろ～でぃんぐ</div>
  );
};

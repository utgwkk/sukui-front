import React from "react";
import { Image } from "../types";
import { ImageItem } from "./ImageItem";

interface Props {
  isLoaded: boolean;
  images: Image[];
  wholeCount: number;
}

export const ImageList = ({ isLoaded, images, wholeCount }: Props) => {
  if (isLoaded) {
    return (
      <>
        <div>{wholeCount}件の画像が見つかりました</div>
        <div className="image-list-container">
          {images.length > 0
            ? images.map((image, idx) => <ImageItem image={image} key={idx} />)
            : "画像はありません"}
        </div>
      </>
    );
  }
  return <div>なうろ～でぃんぐ</div>;
};

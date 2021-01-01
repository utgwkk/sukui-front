import React, { useEffect, useState } from "react";
import { ApiImagesResponse, Image } from "../types";
import axios from "axios";
import { apiImagesURL } from "../apiEndpoint";
import { ImageItem } from "./ImageItem";

export const ImageList = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    axios
      .get<ApiImagesResponse>(apiImagesURL)
      .then((resp) => {
        setIsLoaded(true);
        setImages(resp.data.data);
      });
  }, []);

  if (isLoaded) {
    return (
      <div>
        {images.map((image, idx) => <ImageItem image={image} key={idx} />)}
      </div>
    );
  }
  return (
    <div>なうろ～でぃんぐ</div>
  )
};

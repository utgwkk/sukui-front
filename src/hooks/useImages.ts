import { useEffect, useState } from "react";
import axios from "axios";
import qs from "querystring";
import { ApiImagesResponse, Image } from "../types";
import { apiImagesURL } from "../apiEndpoint";

export const useImages = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  const loadImages = (maxId?: number) => {
    setIsLoaded(false);
    const url = `${apiImagesURL}?${qs.stringify({
      max_id: maxId,
      count: 200,
    })}`;
    axios.get<ApiImagesResponse>(url).then((resp) => {
      setIsLoaded(true);
      setImages(resp.data.data);
    });
  };

  // initial loading
  useEffect(() => {
    loadImages();
  }, []);

  return {
    isLoaded,
    images,
    loadImages,
  };
};

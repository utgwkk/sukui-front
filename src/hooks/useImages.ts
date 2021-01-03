import { useEffect, useState } from "react";
import axios from "axios";
import qs from "querystring";
import { ApiImagesQueryParam, ApiImagesResponse, Image } from "../types";
import { apiImagesURL } from "../apiEndpoint";

export const useImages = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<Image[]>([]);
  const [loadCount] = useState(200);

  const loadImages = ({ maxId, count }: ApiImagesQueryParam) => {
    setIsLoaded(false);
    const url = `${apiImagesURL}?${qs.stringify({
      max_id: maxId,
      count: count,
    })}`;
    axios.get<ApiImagesResponse>(url).then((resp) => {
      setIsLoaded(true);
      setImages(resp.data.data);
    });
  };

  // initial loading
  useEffect(() => {
    loadImages({ count: 200 });
  }, []);

  return {
    isLoaded,
    images,
    loadCount,
    loadImages,
  };
};

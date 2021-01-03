import { useEffect, useState } from "react";
import axios from "axios";
import qs from "querystring";
import {
  ApiImagesQueryParam,
  ApiImagesResponse,
  ApiImagesSearchQueryParam,
  ApiImagesSearchResponse,
  Image,
} from "../types";
import { apiImagesSearchURL, apiImagesURL } from "../apiEndpoint";

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

  const searchImages = ({
    all,
    any,
    ex,
    maxId,
    count,
  }: ApiImagesSearchQueryParam) => {
    setIsLoaded(false);
    const url = `${apiImagesSearchURL}?${qs.stringify({
      max_id: maxId,
      count: count,
      all,
      any,
      ex,
    })}`;
    axios.get<ApiImagesSearchResponse>(url).then((resp) => {
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
    searchImages,
  };
};

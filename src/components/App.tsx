import React, { useEffect, useState } from "react";
import axios from "axios";
import qs from "querystring";
import { apiImagesURL } from "../apiEndpoint";
import { ImageList } from "./ImageList";
import { ApiImagesResponse, Image } from "../types";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState<Image[]>([]);

  const loadImages = (maxId?: number) => {
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

  const handleLoadImageButtonClick = () => {
    setIsLoaded(false);
    const maxId = images.length > 0 ? images[images.length - 1].id : undefined;
    loadImages(maxId);
  };

  return (
    <div className="App">
      <h1>救い</h1>
      <ImageList isLoaded={isLoaded} images={images} />
      <button onClick={handleLoadImageButtonClick}>画像を読み込む</button>
    </div>
  );
}

export default App;

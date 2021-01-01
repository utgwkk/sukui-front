import React, { useEffect, useState } from 'react';
import axios from "axios";
import { apiImagesURL } from "./apiEndpoint";
import { ImageList } from './components/ImageList';
import { ApiImagesResponse, Image } from './types';

function App() {
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


  return (
    <div className="App">
      <h1>It works!</h1>
      <ImageList isLoaded={isLoaded} images={images} />
    </div>
  );
}

export default App;

import React from "react";
import { ImageList } from "./ImageList";
import { useImages } from "../hooks/useImages";

function App() {
  const { isLoaded, images, loadImages } = useImages();

  const handleLoadImageButtonClick = () => {
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

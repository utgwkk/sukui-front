import React from "react";
import { ImageList } from "./ImageList";
import { SearchBox } from "./SearchBox";
import { useImages } from "../hooks/useImages";

function App() {
  const {
    isLoaded,
    images,
    loadCount,
    wholeCount,
    loadImages,
    searchImages,
  } = useImages();

  const handleLoadImageButtonClick = () => {
    const maxId = images.length > 0 ? images[images.length - 1].id : undefined;
    loadImages({ maxId, count: loadCount });
  };

  const handleSearchButtonClick = (all?: string, any?: string, ex?: string) => {
    searchImages({ all, any, ex, count: loadCount });
  };

  return (
    <div className="App">
      <h1>救い</h1>
      <SearchBox onSearch={handleSearchButtonClick} />
      <button onClick={handleLoadImageButtonClick}>画像を読み込む</button>
      <hr />
      <ImageList isLoaded={isLoaded} images={images} wholeCount={wholeCount} />
    </div>
  );
}

export default App;

import React, { useState } from "react";

interface Props {
  // eslint-disable-next-line no-unused-vars
  onSearch: (all?: string, any?: string, ex?: string) => void;
}

export const SearchBox = ({ onSearch }: Props) => {
  const [allQuery, setAllQuery] = useState("");
  const [anyQuery, setAnyQuery] = useState("");
  const [exQuery, setExQuery] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(allQuery, anyQuery, exQuery);
      }}
    >
      <div>
        <label htmlFor="all-query">全て含む</label>
        <input
          type="search"
          id="all-query"
          value={allQuery}
          onChange={(e) => setAllQuery(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="any-query">いずれかを含む</label>
        <input
          type="search"
          id="any-query"
          value={anyQuery}
          onChange={(e) => setAnyQuery(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ex-query">含まない</label>
        <input
          type="search"
          id="ex-query"
          value={exQuery}
          onChange={(e) => setExQuery(e.target.value)}
        />
      </div>
      <div>
        <button>Search</button>
      </div>
    </form>
  );
};

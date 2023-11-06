import { useState } from "react";
import { useEffect } from "react";

export function useInputAutocomplete(data: any, typeInput: any) {
  const [resultsSearch, setResultsSearch] = useState<any>([]);
  const [textSearchInput, setTextSearchInput] = useState("");
  const filterPodcasts = () => {
    let filteredData = [];
    if (typeInput === 'podcasts') {
      filteredData = data.filter(
        (data: any) =>
        data.title.label
        .toLowerCase()
        .includes(textSearchInput.toLowerCase()) ||
        data["im:artist"].label
        .toLowerCase()
        .includes(textSearchInput.toLowerCase())
      );
    } else {
      filteredData = data.filter(
        (data: any) =>
        data.trackName
        .toLowerCase()
        .includes(textSearchInput.toLowerCase()) ||
        data.shortDescription
        .toLowerCase()
        .includes(textSearchInput.toLowerCase())
      );
    }

    setResultsSearch(filteredData);
  };

  useEffect(() => {
    if (textSearchInput.length > 0) {
      filterPodcasts();
    }

    if(textSearchInput.length === 0) {
      setResultsSearch(data)
    }
  }, [textSearchInput]);

  useEffect(() => {
    setResultsSearch(data);
  }, []);

  return {
    resultsSearch: resultsSearch,
    setResultsSearch: setResultsSearch,
    textSearchInput: textSearchInput,
    setTextSearchInput: setTextSearchInput,
  };
}

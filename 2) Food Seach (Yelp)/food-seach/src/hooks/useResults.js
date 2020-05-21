import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  async function searchApi(searchTerm) {
    try {
      const response = await yelp.get("/search", {
        params: {
          term: searchTerm,
          location: "san jose",
          limit: 50,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  }

  //Only call once to fill list with default results
  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi,results,errorMessage]
};

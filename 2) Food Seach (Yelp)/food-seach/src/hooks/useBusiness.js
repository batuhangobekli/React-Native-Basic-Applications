import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [business, setBusiness] = useState([]);

  async function getBusinessDetails(id) {
    try {
      const response = await yelp.get("/" + id);
      setBusiness(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  }
  return [getBusinessDetails, business, errorMessage];
};

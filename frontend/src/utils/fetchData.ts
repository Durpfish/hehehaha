import React from "react";
import backendUrl from "..";

async function fetchData<T>(endpoint: string, setter: React.Dispatch<React.SetStateAction<T>>, loader: React.Dispatch<React.SetStateAction<boolean>>) {
    const url = backendUrl + endpoint;
    loader(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setter(data);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    } finally {
      loader(false);
    }
  }
  
export default fetchData;
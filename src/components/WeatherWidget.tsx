import { useEffect } from "react";
import axios from "axios";

function usePingServer() {
  useEffect(() => {
    axios.get("/api/ping").then((response) => {
      console.log(response.data);
    });
  }, []);
}

export function WeatherWidget() {
  usePingServer();

  return <div>Your Weather Widget Here!!!</div>;
}

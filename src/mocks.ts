import { http, HttpResponse, delay } from "msw";
import { setupWorker } from "msw/browser";
import { cities } from "./data/cities";
import { weatherData } from "./data/weather";

export const handlers = [
  http.get("/api/ping", async () => {
    await delay(100);
    return HttpResponse.json({
      message: "pong",
    });
  }),
  http.get("/api/cities", async () => {
    await delay(1000);
    return HttpResponse.json(cities);
  }),
  http.get("/api/weather/:lat/:lng", async (req) => {
    await delay(400);
    const { lat, lng } = req.params;
    const weatherInfo = weatherData[`${lat},${lng}`];

    if (!weatherInfo) {
      return HttpResponse.json(
        {
          message: "Data not found",
        },
        { status: 404 }
      );
    }

    const bearerToken = req.request.headers.get("Authorization") || "";

    const token = bearerToken.split(" ")[1];

    const enhancedData =
      (token === "af6627ea-89de-4ac9-8e98-1d500dc85645" && {
        windSpeed: "5.0",
        windDirection: "NE",
        pressure: "1013.0",
        visibility: "10.0",
      }) ||
      {};

    return HttpResponse.json({
      ...weatherInfo,
      ...enhancedData,
    });
  }),
];

export const worker = setupWorker(...handlers);

import { API_KEY, HOST, URL } from "./apiKey";

const GOOGLE_API_KEY = "";
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `${lat},${lng}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": HOST,
    },
  };
  const url = `${URL}?latitude=${lat}&longitude=${lng}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }
  // const =await fetch(url);
  const data = await response.json();
  const address = data.Country;
  return address;
}

import PromiseRej from "../components/ui/PromiseRej";
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
  try {
    const response = await fetch(url, options);
    // const =await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch address");
    }
    const data = await response.json();
    const address = data.Country;
    return address;
  } catch (error) {
    <PromiseRej />;
  }
}

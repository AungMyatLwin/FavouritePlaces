const GOOGLE_API_KEY = "";
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `${lat},${lng}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "1ed09c3ca7mshe1f533fb1497bdcp198dcbjsnecdc10228635",
      "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
    },
  };
  const url = `https://geocodeapi.p.rapidapi.com/GetTimezone?latitude=${lat}&longitude=${lng}`;

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }
  // const =await fetch(url);
  const data = await response.json();
  const address = data.Country;
  return address;
}

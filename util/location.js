const GOOGLE_API_KEY = "";
export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `${(lat, lng)}+${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

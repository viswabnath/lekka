import { ImageResponse } from "next/og";
import { OgImageContent } from "@/lib/ogImageContent";

export const alt = "Lekka — one ledger for your whole business, by OneMark";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(<OgImageContent />, { ...size });
}

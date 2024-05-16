import { fontFace } from "@vanilla-extract/css";
import bold from "./Geist-Bold.woff2";
import ultraLight from "./Geist-UltraLight.woff2";

export const geistBold = fontFace({
  src: `url(${bold})`,
});

export const geistUltraLight = fontFace({
  src: `url(${ultraLight})`,
});

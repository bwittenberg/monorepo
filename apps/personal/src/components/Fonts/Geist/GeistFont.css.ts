import { fontFace } from "@vanilla-extract/css";
import regular from "./Geist-Bold.woff2";
import thin from "./Geist-UltraLight.woff2";

export const geistRegular = fontFace({
  src: `url(${regular})`,
});

export const geistThin = fontFace({
  src: `url(${thin})`,
});

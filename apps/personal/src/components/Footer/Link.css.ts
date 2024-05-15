import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const anchor = style({
  textDecoration: "none",
  color: "#525252",
  ":hover": {
    color: "#262626",
  },
});

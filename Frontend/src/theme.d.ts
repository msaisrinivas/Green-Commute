import { ThemeOptions, TypographyVariantsOptions } from "@mui/material/styles";
import React from "react";

declare module "@mui/material/styles" {
  interface ThemeOptions {}

  interface Palette {
    green?: {
      one?: string;
      two?: string;
      three?: string;
      four?: string;
      five?: string;
      six?: string;
      seven?:string;
    },
    black?: {
        one?: string;
        two?: string;
        three?: string;
    },
    gray?: {
        one?: string;
        two?: string;
        three?: string;
        four?:string;
    },
    accent?: {
        one?: string;
        two?: string;
    },
    light?:{
        one?: string;
        two?: string;
        three?: string;
        four?:string;
        linearOne: string;
        linearTwo: string;
    }
  }

  interface PaletteOptions {
    green?: {
      one?: string;
      two?: string;
      three?: string;
      four?: string;
      five?: string;
      six?: string;
      seven?:string;
    },
    black?:{
        one?: string;
        two?: string;
        three?: string;
    },
    gray?:{
        one?: string;
        two?: string;
        three?: string;
        four?:string;
    },
    accent?:{
        one?: string;
        two?: string;
    },
    light?:{
        one?: string;
        two?: string;
        three?: string;
        four?:string;
        linearOne: string;
        linearTwo: string;
    }
  }

  interface TypographyVariants {
    caption2?: React.CSSProperties;
  }

  interface TypographyVariantsOptions{
    caption2?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
      caption2: true;
    }
  }
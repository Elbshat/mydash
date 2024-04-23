import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "var(--c-neutral-light)",
          "&:hover": {
            backgroundColor: "var(--btn-hover)",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        [" .MuiFormLabel-root, .MuiInputBase-root"]: {
          color: "var(--c-neutral-light) !important",
        },
        body: {
          backgroundColor: "var(--bg-default)",
        },
      },
    },
  },
});

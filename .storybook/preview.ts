import type { Preview } from "@storybook/react";
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import { withThemeFromJSXProvider } from '@storybook/addon-themes';
// import { lightTheme, darkTheme } from '../src/themes.js';

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/material-icons";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

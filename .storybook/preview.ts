import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';  // Ensure path is correct to your global CSS

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

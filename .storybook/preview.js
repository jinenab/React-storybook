import { addDecorator } from "@storybook/react";
import Center from "../src/components/Center/Center";
import { ChakraProvider, Box } from "@chakra-ui/react";

import {theme} from "@chakra-ui/theme"
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
};

export const decorators = [
  (Story) => (
<Center><Story/></Center>
  ),
];

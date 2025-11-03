import { createTheme, ScrollArea, } from "@mantine/core";

import classes from './theme.module.css';

export const theme = createTheme({
  /* Put your mantine theme override here */
  components: {
    ScrollArea: ScrollArea.extend({
			classNames: {
				root: classes.scrollAreaRoot,
				content: classes.scrollAreaContent,
			},
		}),
  }
});

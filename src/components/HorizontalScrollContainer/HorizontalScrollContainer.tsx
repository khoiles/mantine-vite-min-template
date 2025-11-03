import { Box, ScrollArea, ScrollAreaProps } from '@mantine/core';

import classes from './horizontalScrollContainer.module.css';

/** Makes indicators on left and right sides when horizontal scrolling.
 *  Accepts `ScrollAreaProps`.
 */
export const HorizontalScrollContainer = ({
	children,
	...otherProps
}: ScrollAreaProps) => (
	<ScrollArea
		scrollbarSize={16}
		pb={16}
		classNames={{
			root: classes.scrollAreaRoot,
			viewport: classes.scrollAreaViewport,
			scrollbar: classes.scrollAreaScrollbar,
		}}
		{...otherProps}
	>
		<Box className={classes.scrollAreaBox}>{children}</Box>
	</ScrollArea>
);

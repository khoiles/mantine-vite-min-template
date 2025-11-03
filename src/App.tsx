import "@mantine/core/styles.css";
import { Box, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HorizontalScrollContainer, TableWithContent } from "./components";

export default function App() {
  return <MantineProvider theme={theme}>
    <Box p="xl">
      <HorizontalScrollContainer>
        <TableWithContent />
      </HorizontalScrollContainer>
    </Box>
  </MantineProvider>;
}

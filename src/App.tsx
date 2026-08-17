import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import { MantineProvider } from "@mantine/core";
import { Notifications } from '@mantine/notifications';
import { theme } from "./theme";
import { ApplicationShell } from './ApplicationShell';


export default function App() {
	return (
		<MantineProvider theme={theme}>
			<Notifications />
			<ApplicationShell />
		</MantineProvider>
	);
}

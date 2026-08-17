import { AppShell, Burger, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HorizontalScrollContainer, TableWithContent, ShowNotification } from './components';

export const ApplicationShell = () => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<AppShell
			padding="md"
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened },
			}}
		>
			<AppShell.Header bg='blue.0'>
				<Burger
					opened={opened}
					onClick={toggle}
					hiddenFrom="sm"
					size="sm"
				/>

				<div>Logo</div>
			</AppShell.Header>

			<AppShell.Navbar bg="gray.3">Navbar</AppShell.Navbar>

			<AppShell.Main>
				<HorizontalScrollContainer>
					<TableWithContent />
				</HorizontalScrollContainer>

				<Space h="xl" />

				<ShowNotification />
			</AppShell.Main>
		</AppShell>
	);
}

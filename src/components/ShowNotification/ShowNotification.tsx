import { Button } from '@mantine/core';
import { showNotification } from '@mantine/notifications';

export const ShowNotification = () => {
	return (
		<Button
			onClick={() =>
				showNotification({
					title: 'Default notification',
					message: 'Do not forget to star Mantine on GitHub! 🌟',
					position: 'top-right',
					autoClose: false,

				})
			}
		>
			Show notification
		</Button>
	);
}

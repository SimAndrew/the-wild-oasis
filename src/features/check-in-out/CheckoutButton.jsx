import Button from '../../ui/Button';
import { useCheckOut } from './useCheckOut.js';

function CheckoutButton({ bookingId }) {
	const { checkout, isCheckingOut } = useCheckOut();

	return (
		<Button
			size="small"
			variation="primary"
			onClick={() => checkout(bookingId)}
			disabled={isCheckingOut}
		>
			Check out
		</Button>
	);
}

export default CheckoutButton;

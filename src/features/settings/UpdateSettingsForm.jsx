import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input.jsx';
import Spinner from '../../ui/Spinner.jsx';
import { useSettings } from './useSettings.js';
import { useUpdateSetting } from './useUpdateSetting.js';

function UpdateSettingsForm() {
	const {
		isLoading,
		settings: {
			minBookingLength,
			maxBookingLength,
			maxGuestsPerBooking,
			breakfastPrice,
		} = {},
	} = useSettings();

	const { updateSetting, isUpdating } = useUpdateSetting(); //?

	if (isLoading) return <Spinner />;

	function handleUpdate(e) {
		const { value, id, defaultValue } = e.target;

		if (!value || !id || defaultValue === value) return;
		updateSetting({ [id]: value });
		e.target.defaultValue = value;
	}

	return (
		<Form>
			<FormRow label="Minimum nights/booking">
				<Input
					type="number"
					defaultValue={minBookingLength}
					onBlur={(e) => handleUpdate(e)}
					disabled={isUpdating}
					id="minBookingLength"
				/>
			</FormRow>

			<FormRow label="Maximum nights/booking">
				<Input
					type="number"
					defaultValue={maxBookingLength}
					onBlur={(e) => handleUpdate(e)}
					disabled={isUpdating}
					id="maxBookingLength"
				/>
			</FormRow>

			<FormRow label="Maximum guests/booking">
				<Input
					type="number"
					defaultValue={maxGuestsPerBooking}
					onBlur={(e) => handleUpdate(e)}
					disabled={isUpdating}
					id="maxGuestsPerBooking"
				/>
			</FormRow>

			<FormRow label="Breakfast price">
				<Input
					type="number"
					defaultValue={breakfastPrice}
					onBlur={(e) => handleUpdate(e)}
					disabled={isUpdating}
					id="breakfastPrice"
				/>
			</FormRow>
		</Form>
	);
}

export default UpdateSettingsForm;

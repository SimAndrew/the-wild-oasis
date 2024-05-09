import Heading from '../ui/Heading';
import Row from '../ui/Row.jsx';
import UpdateSettingsForm from '../features/settings/UpdateSettingsForm.jsx';
import Uploader from '../data/Uploader.jsx';

function Settings() {
	return (
		<>
			<Row>
				<Heading as="h1">Update hotel settings</Heading>

				<UpdateSettingsForm />
			</Row>

			<Row>
				<Uploader />
			</Row>
		</>
	);
}

export default Settings;

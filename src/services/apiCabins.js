import supabase, { supabaseUrl } from './supabase.js';

export async function getCabins() {
	const { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		throw new Error('Cabins could not be Loaded!');
	}
	return data;
}

export async function createCabin(newCabin) {
	const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
		'/',
		'',
	);

	const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

	const { data, error } = await supabase
		.from('cabins')
		.insert([{ ...newCabin, image: imagePath }]);

	if (error) {
		throw new Error('Cabin could not be Created!');
	}

	const { error: storageError } = await supabase.storage
		.from('cabin-images')
		.upload(imageName, newCabin.image);

	if (storageError) {
		await supabase.from('cabins').delete().eq('id', data.id);
		throw new Error(
			'Cabin image could not be Uploaded! And the cabin was not created.',
		);
	}

	return data;
}

export async function deleteCabin(id) {
	const { data, error } = await supabase.from('cabins').delete().eq('id', id);

	if (error) {
		throw new Error('Cabin could not be Deleted!');
	}
	return data;
}

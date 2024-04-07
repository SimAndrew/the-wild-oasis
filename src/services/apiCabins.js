import supabase from './supabase.js';

export async function getCabins() {
	const { data, error } = await supabase.from('cabins').select('*');

	if (error) {
		throw new Error('Cabins could not be Loaded!');
	}
	return data;
}

export async function createCabin(newCabin) {
	const { data, error } = await supabase.from('cabins').insert([newCabin]);

	if (error) {
		throw new Error('Cabin could not be Created!');
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

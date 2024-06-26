import TableOperations from '../../ui/TableOperations.jsx';
import Filter from '../../ui/Filter.jsx';
import SortBy from '../../ui/SortBy.jsx';

function CabinTableOperations() {
	return (
		<TableOperations>
			<Filter
				filterField="discount"
				options={[
					{ value: 'all', label: 'All' },
					{ value: 'no-discount', label: 'No discount' },
					{ value: 'with-discount', label: 'With discount' },
				]}
			/>

			<SortBy
				options={[
					{ value: 'name-asc', label: 'Sort by Name (A-Z)' },
					{ value: 'name-desc', label: 'Sort by Name (Z-A)' },
					{ value: 'regularPrice-asc', label: 'Sort by Price (low first)' },
					{ value: 'regularPrice-desc', label: 'Sort by Price (high first)' },
					{ value: 'maxCapacity-asc', label: 'Sort by Capacity (low first)' },
					{ value: 'maxCapacity-desc', label: 'Sort by Capacity (high first)' },
				]}
			/>
		</TableOperations>
	);
}

export default CabinTableOperations;

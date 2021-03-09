import { VuejsDatatableFactory } from 'vue-js-datatables';

VuejsDatatableFactory.registerTableType( 'bootstrap-3-datatable', tableType =>
	tableType.mergeSettings( {
		pager: {
			classes: {
				disabled: 'disabled',
				pager: 'pagination',
				selected: 'active',
			},
			icons: {
				next: '»',
				previous: '«',
			},
		},
		table: {
			class: 'table',
		}
	} ) );

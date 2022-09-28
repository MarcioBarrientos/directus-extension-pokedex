import { defineModule } from '@directus/extensions-sdk';
import ModuleComponent from './module.vue';

export default defineModule({
	id: 'pokedex',
	name: 'Pokedex',
	icon: 'box',
	routes: [
		{
			path: '',
			component: ModuleComponent,
		},
	],
});

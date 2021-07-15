import Root from './Root.vue'
import 'virtual:windi.css'

export default {
	id: 'chat',
	name: 'Chat',
	icon: 'box',
	routes: [
		{
			path: '',
			component: Root,
		},
	],
}
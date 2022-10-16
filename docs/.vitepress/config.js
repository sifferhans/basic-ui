export default {
	title: 'Basic UI',
	description: 'A collection of basic but polished UI components for Vue 3',
	appearance: false,
	lastUpdated: true,
	head: [
		['link', { rel: 'icon', href: '/favicon.svg' }],
	],
	themeConfig: {
		logo: './logo.svg',
		siteTitle: false,
		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'Getting started', link: '/' }
				]
			},
			{
				text: 'Forms',
				items: [
					{ text: 'Button', link: '/guide/button' },
					{ text: 'Input', link: '/guide/input' },
					{ text: 'Textarea', link: '/guide/textarea' },
					{ text: 'Select', link: '/guide/select' },
					{ text: 'Checkbox', link: '/guide/checkbox' },
					{ text: 'Form', link: '/guide/form' },
				]
			},
			{
				text: 'Layout',
				items: [
					{ text: 'Flex', link: '/guide/flex' },
					{ text: 'Grid', link: '/guide/grid' },
				]
			}
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/sifferhans/basic-ui' }
		],
		editLink: {
			pattern: 'https://github.com/sifferhans/basic-ui/edit/master/docs/:path',
			text: 'Edit this page on GitHub'
		}
	}
}
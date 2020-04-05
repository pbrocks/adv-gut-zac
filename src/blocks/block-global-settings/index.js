/**
 * Block dependencies
 */
import icon from './icon';
import Edit from './edit';

/**
 * Internal block libraries
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Register block
 */
registerBlockType('adv-gut-zac/with-global-settings', {
	title: __( 'With Global Settings', 'adv-gut-zac' ),
	description: __(
		'Example block with global block settings',
		'adv-gut-zac'
	),
	category: 'adv-gut-zac',
	icon: {
		background: 'salmon',
		foreground: 'white',
		src: icon,
	},
	keywords: [__( 'API Key', 'adv-gut-zac' )],
	edit: props => {
		return <Edit {...props} />;
	},
	save: props => {
		return <p>{__( 'Show block global settings', 'adv-gut-zac' )}</p>;
	}
});

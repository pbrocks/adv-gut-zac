import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

import icon from "./icon";

import SelectDemo from "./components/SelectDemo";
import SubscribeDemo from "./components/SubscribeDemo";
import WithSelectDemo from "./components/WithSelectDemo";
import DispatchDemo from "./components/DispatchDemo";
import WithDispatchDemo from "./components/WithDispatchDemo";
import WithComposeDemo from "./components/WithComposeDemo";

export default registerBlockType("adv-gut-zac/exploring-data", {
	title: __("Exploring the Data API", "adv-gut-zac"),
	description: __(
		"Demo of select, subscribe, dispatch, withSelect, withDispatch and compose",
		"adv-gut-zac"
	),
	category: "adv-gut-zac",
	icon: {
		background: 'yellow',
		src: icon,
	},
	attributes: {},
	edit: props => {
		const { className } = props;
		return (
			<div className={className}>
				<SelectDemo />
				<SubscribeDemo />
				<WithSelectDemo />
				<DispatchDemo />
				<WithDispatchDemo />
				<WithComposeDemo />
			</div>
		);
	},
	save: props => {
		return <p>{__("Data API Example", "adv-gut-zac")}</p>;
	}
});

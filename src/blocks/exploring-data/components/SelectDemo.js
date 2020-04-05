import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';

const SelectDemo = props => {
	const blockCount = select("core/editor").getBlockCount();

	return (
		<div>
			<pre>
				<code>{"select()"}</code>
			</pre>
			<p>
				{__("Block Count:", "adv-gut-zac")} {blockCount}
			</p>
		</div>
	);
};

export default SelectDemo;

import { __ } from '@wordpress/i18n';
import { withSelect } from '@wordpress/data';

const WithSelectDemo = ({ blockCount }) => (
	<div>
		<pre>
			<code>{`withSelect(()=> {})(WithSelectDemo)`}</code>
		</pre>
		<p>
			{__("Block Count:", "adv-gut-zac")} {blockCount}
		</p>
	</div>
);

export default withSelect((select, ownProps) => {
	// console.log(ownProps);
	return {
		blockCount: select("core/editor").getBlockCount()
	};
})(WithSelectDemo);

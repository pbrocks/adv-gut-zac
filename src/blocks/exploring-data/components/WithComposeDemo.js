import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { withSelect, withDispatch } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const WithComposeDemo = ({ blocks, removeBlock }) => (
	<div>
		<pre>
			<code>{"compose([])(WithComposeDemo)"}</code>
		</pre>
		<ul>
			{blocks.map(block => (
				<li key={block.clientId}>
					{block.name}
					<Button
						className="is-button is-default"
						onClick={() => removeBlock(block.clientId)}
					>
						{__("X", "adv-gut-zac")}
					</Button>
				</li>
			))}
		</ul>
	</div>
);

export default compose([
	withSelect(select => {
		return {
			blocks: select("core/editor").getBlocks()
		};
	}),
	withDispatch(dispatch => {
		return {
			removeBlock: dispatch("core/editor").removeBlock
		};
	})
])(WithComposeDemo);

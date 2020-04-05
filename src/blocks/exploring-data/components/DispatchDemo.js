import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { withSelect, dispatch } from '@wordpress/data';

const DispatchDemo = ({ blocks }) => (
	<div>
		<pre>
			<code>{"dispatch()"}</code>
		</pre>
		<ul>
			{blocks.map(block => (
				<li key={block.clientId}>
					{block.name}{" "}
					<Button
						className="is-button is-default"
						onClick={() => {
							dispatch("core/editor").removeBlock(block.clientId);
						}}
					>
						{__("X", "adv-gut-zac")}
					</Button>
				</li>
			))}
		</ul>
	</div>
);

export default withSelect(select => {
	return {
		blocks: select("core/editor").getBlocks()
	};
})(DispatchDemo);

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { withSelect, dispatch } from '@wordpress/data';

import DeleteButton from "./DeleteButton";

const WithDispatchDemo = ({ blocks }) => (
	<div>
		<pre>
			<code>{"withDispatch(()=>{})(WithDispatchDemo)"}</code>
		</pre>
		<ul>
			{blocks.map(block => (
				<li key={block.clientId}>
					{block.name}
					<DeleteButton clientId={block.clientId} />
				</li>
			))}
		</ul>
	</div>
);

export default withSelect(select => {
	return {
		blocks: select("core/editor").getBlocks()
	};
})(WithDispatchDemo);

import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { withDispatch } from '@wordpress/data';

const DeleteButton = ({ clientId, removeBlock }) => (
	<Button
		className="is-button is-default"
		onClick={() => {
			removeBlock(clientId);
		}}
	>
		{__("X", "adv-gut-zac")}
	</Button>
);

export default withDispatch((dispatch, ownProps) => {
	return {
		removeBlock: dispatch("core/editor").removeBlock
	};
})(DeleteButton);

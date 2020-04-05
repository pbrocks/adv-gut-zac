import { __ } from '@wordpress/i18n';
import { Component } from '@wordpress/element';
import { subscribe, select } from '@wordpress/data';

export default class SubscribeDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			blockCount: ""
		};
	}

	componentDidMount() {
		const unsubscribe = subscribe(() => {
			const blockCount = select("core/editor").getBlockCount();

			// console.group("State Changed!");
			// console.log("Prev Count:", this.state.blockCount);
			// console.log("New Count:", blockCount);
			// console.groupEnd();

			// if (this.state.blockCount < blockCount) {
			//   console.log("Block Added!");
			// }
			// if (this.state.blockCount > blockCount) {
			//   console.log("Block Removed!");
			// }

			this.setState({ blockCount });
		});
	}

	render() {
		return (
			<div>
				<pre>
					<code>{"subscribe(() => {})"}</code>
				</pre>
				<p>
					{__("Block Count:", "adv-gut-zac")} {this.state.blockCount}
				</p>
			</div>
		);
	}
}

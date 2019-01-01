import React from 'react';
import ReactDOM from 'react-dom';
import Segment from './Segment';

const App = () => {
	return (
		<div>
			<Segment
				header=" No documents are listed for this customer."
				text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
			/>
			<div className="ui placeholder segment">
				<h4 class="ui header">For Your Information</h4>
				<p>
					Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
					Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
					amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
				</p>
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

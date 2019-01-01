import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

const App = () => {
	return (
		<div>
			<Message
				header="Changes in Service"
				text="We just updated our privacy policy here to better service our customers."
			/>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

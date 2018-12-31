import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail avatar={faker.image.avatar()} author="Sam" timeAgo="Today 6:00PM" content="this is nice!" />
			<CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today 6:01PM" content="awesome" />
			<CommentDetail avatar={faker.image.avatar()} author="Jane" timeAgo="Today 6:03PM" content="cool!" />
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

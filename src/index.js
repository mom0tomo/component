import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApproveCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					avatar={faker.image.avatar()}
					author="Sam"
					timeAgo="Today 6:00PM"
					content="this is nice!"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail avatar={faker.image.avatar()} author="Alex" timeAgo="Today 6:01PM" content="awesome" />
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail avatar={faker.image.avatar()} author="Jane" timeAgo="Today 6:03PM" content="cool!" />
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));

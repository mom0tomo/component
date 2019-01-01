import React from 'react';

const Segment = (props) => {
	return (
		<div className="ui placeholder segment">
			<div className="ui icon header">
				<i className="pdf file outline icon" />
				{props.header}
			</div>
			<div className="ui primary button">Add Document</div>
		</div>
	);
};

export default Segment;

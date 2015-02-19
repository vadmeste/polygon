var React = require('react');

var MinioSearchResults = React.createClass({
	propTypes: {
		input: React.PropTypes.string,
	},

	render: function() {
		return (
			<div className="minio-search-results">
				Result: {this.props.input}
			</div>
		);
	}
});

module.exports = MinioSearchResults;

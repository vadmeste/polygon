var React = require('react');
var Mui = require('material-ui');

var MinioSearchBar = React.createClass({
	propTypes: {
		onChange: React.PropTypes.func,
		onClick: React.PropTypes.func,
		hintText: React.PropTypes.string,
	},

	render: function() {
		return (
			<form className="minio-search-bar" onSubmit={this.props.onClick} >
				<Mui.TextField ref="searchInput" hintText={this.props.hintText}
					onChange={this.props.onChange} />
				<Mui.RaisedButton label="Search" />
			</form>
		);
	}
});

module.exports = MinioSearchBar;

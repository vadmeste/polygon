var React = require('react');
var Mui = require('material-ui');

var MinioSearchBar = React.createClass({

	render: function() {
		return (
			<form className="minio-search-bar" onSubmit={this.props.onClick} >
				<Mui.TextField ref="searchInput" hintText="Help" onChange={this.props.onChange} />
				<Mui.RaisedButton label="Search" />
			</form>
		);
	}
});

module.exports = MinioSearchBar;
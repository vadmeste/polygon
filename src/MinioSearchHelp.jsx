var React = require('react');

var MinioSearchHelp = React.createClass({

	render: function() {
		if(this.props.visible) {
			var inputLength = this.props.input.length;
			return (
				<div>
					{this.props.input}
					<br />
					{inputLength}
				</div>
			);
		} else {
			return false;
		}
	}

});

module.exports = MinioSearchHelp;
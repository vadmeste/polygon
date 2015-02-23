var React = require('react');
var fuzzy = require('fuzzy');

var MinioSearch = React.createClass({
	propTypes: {
		options: React.PropTypes.array,
		maxVisible: React.PropTypes.number,
		defaultValue: React.PropTypes.string,
		onOptionSelected: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			options: [],
			defaultValue: "",
			onOptionSelected: function(option) {}
		};
	},

	getInitialState: function() {
		return {
			// The set of all options
			options: this.props.options,
			visible: this.getOptionsForValue(this.props.defaultValue, this.props.options),
			entryValue: this.props.defaultValue,
			selection: null
		};
	},

	getOptionsForValue: function(value, options) {
		var result = fuzzy.filter(value, options).map(function(res) {
			return res.string;
		});
		if (this.props.maxVisible) {
			result = result.slice(0, this.props.maxVisible);
		}
		return result;
	},

	_renderIncrementalSearchResults: function() {
		// Nothing has been entered into the textbox
		if (!this.state.entryValue) {
			return "";
		}

		// Something was just selected
		if (this.state.selection) {
			return "";
		}

		// There are no typeahead / autocomplete suggestions
		if (!this.state.visible.length) {
			return "";
		}

		return (<div></div>);
	},

	_onOptionSelected: function(option) {
		var nEntry = this.refs.entry.getDOMNode();
		nEntry.focus();
		nEntry.value = option;
		this.setState({visible: this.getOptionsForValue(option, this.state.options),
			selection: option,
			entryValue: option});
		this.props.onOptionSelected(option);
	},

	_onTextEntryUpdated: function() {
		var value = this.refs.entry.getDOMNode().value;
		this.setState({visible: this.getOptionsForValue(value, this.state.options),
			selection: null,
			entryValue: value});
	},

	render: function() {
		return (
			<div>
			</div>
		);
	}

});

module.exports = MinioSearch;

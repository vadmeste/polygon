var React = require('react');

var MinioSearchBar = require('./MinioSearchBar.jsx');
var MinioSearchResults = require('./MinioSearchResults.jsx');
var MinioSearchHelp = require('./MinioSearchHelp.jsx');
var MinioSearch = require('./MinioSearch.jsx');

var MinioApp = React.createClass({
	getInitialState: function() {
		return {
			helpVisible: false,
			searchInput: '',
			searchResultInput: ''
		};
	}	,
	render: function() {
		return (
			<div>
				<MinioSearchBar ref="minioSearchBar" hintText="Search..."
					onChange={this.doSearchHelp} onClick={this.doSearch} onKeyDown={this.doSearchShortcut} />
				<MinioSearchHelp visible={this.state.helpVisible} input={this.state.searchInput} />
				<MinioSearch onOptionSelected={this.doSearchHelp} />
				<MinioSearchResults input={this.state.searchResultInput} />
			</div>
		);
	},
	doSearchHelp: function() {
		var newState = {
			helpVisible: true,
			searchInput: this.refs.minioSearchBar.refs.searchInput.getValue().trim()
		};
		this.setState(newState);
	},
	doSearch: function(e) {
		e.preventDefault();
		var result = this.refs.minioSearchBar.refs.searchInput.getValue().trim()
		console.log(result)
		var newState = {
			helpVisible: false,
			searchInput: '',
			searchResultInput: result
		};
		this.refs.minioSearchBar.refs.searchInput.setValue('');
		this.setState(newState);
	},

    doSearchShortcut: function(e) {
		if (e.altKey && (e.keyCode < 16 || e.keyCode > 18)) {
			console.log('Alt + ' + e.keyCode);
			e.preventDefault();
		}
		if (e.keyCode == 9) {
			console.log('TAB pressed');
		}
	}
});

module.exports = MinioApp;

var React = require('react');
var Mui = require('material-ui');

var Menu = Mui.Menu;

var MinioMenu = React.createClass({
    render: function() {
        if(this.props.visible) {
	        return (
	            <div className="minio">
	                <Menu className="minio-menu-menu" menuItems={this.props.menuItems} />
	                <div className="minio-menu-underlay" ref="minioMenuUnderlay" onClick={this.props.closeMenuFunction} />
	            </div>
	        ) 
		} else {
        	return false;
        }
    }
});


module.exports = MinioMenu;
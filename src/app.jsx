var React = require("react");
var Mui = require("material-ui");

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var RaisedButton = Mui.RaisedButton;
var Toolbar = Mui.Toolbar;
var ToolbarGroup = Mui.ToolbarGroup;
var Icon = Mui.Icon;
var AppBar = Mui.AppBar;
var Paper = Mui.Paper;
var LeftNav = Mui.LeftNav;

var MinioApp = React.createClass({
    render: function() {
        return(
            <div>
                <AppBar
                    onMenuIconButtonTouchTap={this.toggleNav}
                >
                    <h1 className="minio-header">Minio Object Storage</h1>
                </AppBar>
                <LeftNav docked={false} ref="leftNav" menuItems={menuItems} />
            </div>
        )
    },
    toggleNav: function() {
        this.refs.leftNav.toggle();
    }
});


var menuItems = [
    { route: 'status', text: 'Status'},
    { route: 'add-bucket', text: 'Add Bucket'},
]

document.addEventListener(
    "DOMContentLoaded",
    function(event) {
        React.render(
            <MinioApp />,
            document.body
        );
    }
)


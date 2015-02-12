var React = require("react");
var Mui = require("material-ui");

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

var AppBar = Mui.AppBar;
var LeftNav = Mui.LeftNav;
var Menu = Mui.Menu;
var Paper = Mui.Paper;
var RaisedButton = Mui.RaisedButton;
var TextField = Mui.TextField;

var AddBucket = React.createClass({
    getInitialState: function() {
        return {
            buckets: []
        }
    },
    render: function() {
        return(
            <div>
                <Menu menuItems={this.state.buckets} />
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <TextField hintText="Bucket Name" ref ="bucketName" />
                    <br />
                    <RaisedButton label="Add Bucket" />
                </form>
            </div>
        )
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var bucketName = this.refs.bucketName.getValue().trim();
        var menuItem = {
            payload: this.state.buckets.length + 1,
            text: bucketName

        }
        var newState = React.addons.update(this.state, {
            buckets: {
                $push : [menuItem]
            }
        });
        this.setState(newState);
        this.refs.bucketName.setValue('');
    }
});

var MinioApp = React.createClass({
    render: function() {
        return(
            <div>
                <AppBar className="minio-appbar" onMenuIconButtonTouchTap={this.toggleNav} >
                    <h1 className="minio-header">Minio Object Storage</h1>
                </AppBar>
                <LeftNav docked={false} ref="leftNav" menuItems={menuItems} />
                <AddBucket />
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


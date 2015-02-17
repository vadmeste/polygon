var React = require("react");
var MinioApp = require("./MinioApp.jsx");

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

document.addEventListener(
    "DOMContentLoaded",
    function(event) {
        React.render(
            <MinioApp />,
            document.body
        );
    }
);

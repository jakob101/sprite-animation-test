import React from 'react';
require("./Intro.css");

export default React.createClass ({
	render: function() {
        return (
            <div id="initial">
                <i className="fa fa-files-o" aria-hidden="true"></i>
                <h1>Drop your assets here</h1>
            </div>
        );
	}
});
import React from 'react';
require("./Credits.css");

export default React.createClass ({
	render: function() {
        return (
            <div className="credits">
                Created with <i className="fa fa-heart" aria-hidden="true"></i> by <a target="_blank" href="https://github.com/jakob101">Jakob Werner</a>,
                background by <a target="_blank" href="http://codepen.io/Munkkeli/">Munkkeli</a>
            </div>
        );
	}
});
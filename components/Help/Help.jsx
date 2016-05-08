import React from 'react';
require("./Help.css");

export default React.createClass ({
	render: function() {
        return (
            <div className="help">
                <a target="_blank" rel="noopener" href="http://blog.teamtreehouse.com/css-sprite-sheet-animations-steps">
                    Find out more about sprite animations
                </a>
            </div>
        );
	}
});
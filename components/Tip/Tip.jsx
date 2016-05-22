import React from 'react';
require("./Tip.css");

export default React.createClass ({
	render: function() {
        return (
            <div className="tip">
                <div className="tipIcon">
                    <i className="fa fa-question" aria-hidden="true"></i>
                </div>
                Hover to trigger the animation
            </div>
        );
	}
});
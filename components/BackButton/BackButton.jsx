import React from 'react';
require("./BackButton.css");

export default React.createClass ({
	render: function() {
        return (
            <div onClick={() => this.props.onClick()} className="backButtonContainer">
                <span className="backButtonElements">
                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </span>
                <div className="goBackText">
                    back
                </div>
            </div>
        );
	}
});
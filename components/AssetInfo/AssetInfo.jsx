import React from 'react';
require("./AssetInfo.css");

export default React.createClass ({
	render: function() {
        return (
            <div id="info">
                <div className="iconInfo">
                    <i className="fa fa-expand" aria-hidden="true"></i>
                </div>
                <div className="infoContent">
                    <span id="assetDimensions">
                        {this.props.assetWidth}x{this.props.assetHeight}
                    </span>
                </div>
            </div>
        );
	}
});
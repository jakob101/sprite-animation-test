import React from 'react';
require("./AssetInfo.css");

export default React.createClass ({
	render: function() {
        return (
            <div id="info">
                <div className="iconInfo">
                    <i className="fa fa-info" aria-hidden="true"></i>
                </div>
                <div className="infoContent">
                    <span id="assetDimensions">
                        Asset Dimensions (px): <b>{this.props.assetWidth}x{this.props.assetHeight}</b><br />
                        Canvas Dimensions (px): <b>{this.props.canvasWidth}x{this.props.canvasHeight}</b>
                    </span>
                </div>
            </div>
        );
	}
});
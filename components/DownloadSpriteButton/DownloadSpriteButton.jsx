import React from 'react';
require("./DownloadSpriteButton.css");

export default React.createClass ({
	render: function() {
        return (
            <div id="download">
                <a onClick={() => this.props.onClick()} id="downloadSprite">Download sprite <br />
                    ({this.props.canvasWidth}x{this.props.canvasHeight}) <br />
                    <i className="fa fa-arrow-down" aria-hidden="true"></i></a>
            </div>
        );
	}
});
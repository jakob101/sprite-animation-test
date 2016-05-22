import React from 'react';
require("./DownloadSpriteButton.css");

export default React.createClass ({
	render: function() {
        return (
            <div id="download">
                <a onClick={() => this.props.onClick()} id="downloadSprite">Download<br /></a>
                <div className="downloadIcon">
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
            </div>
        );
	}
});
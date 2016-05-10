import React from 'react';
require("./SpritePreview.css");

export default React.createClass ({    
    componentDidMount: function() {
        const canvas = this.refs["animationCanvas"];
        canvas.width = this.props.canvasWidth;
        canvas.height = this.props.assetHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(this.props.images[0], 0, 0);
        let previousImageWidth = this.props.images[0].width;
        
        for (var i = 1; i < this.props.images.length; ++i) {
            ctx.drawImage(this.props.images[i-1], previousImageWidth, 0);
            previousImageWidth += this.props.images[i].width;
        }
        
        const animationElement = this.refs["animationElement"];
        animationElement.style.width = this.props.assetWidth + "px";
        animationElement.style.height = this.props.assetHeight + "px";
        animationElement.style.backgroundImage = "url(" + canvas.toDataURL() + ")";
    },
    
    mouseEnter: function() {
        this.refs["animationElement"].style.backgroundPosition = "-" + (this.props.canvasWidth - this.props.assetWidth) + "px 0";
        this.refs["animationElement"].style.transition = "background-position " + this.props.speed + "s steps(" + (this.props.images.length - 1) + ")";
    },
    
    mouseLeave: function() {
        this.refs["animationElement"].style.backgroundPosition = "0% 0%";
        this.refs["animationElement"].style.transition = "none";
    },
    
    generateSprite: function() {
        const canvas = this.refs["animationCanvas"];
        let element = null;
        if (canvas.msToBlob) {
            // Internet Explorer
            element = canvas.msToBlob();
            window.navigator.msSaveBlob(element, 'sprite.png');
        } else {
            // Other browsers
            element = document.createElement("a");
            element.href = canvas.toDataURL();
            element.download = "sprite.png";
            
            let clickEvent = new MouseEvent("click", {
                "view": window,
                "bubbles": true,
                "cancelable": false
            });
            element.dispatchEvent(clickEvent);
        }
    },
    
	render: function() {
        return (
            <div id="canvasContainer">
                <canvas ref="animationCanvas" id="imageCanvas"></canvas>
                <div 
                    onMouseEnter={() => this.mouseEnter()} 
                    onMouseLeave={() => this.mouseLeave()}
                    ref="animationElement" 
                    id="animation">
                </div>
            </div>
        );
	}
});
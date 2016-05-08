import React from 'react';
import ReactDOM from 'react-dom';

import Credits from "./components/Credits/Credits";
import Help from "./components/help/help";
import Tip from "./components/Tip/Tip";
import validate from "./helpers/validate";
import Intro from "./components/Intro/Intro";
import SpritePreview from "./components/SpritePreview/SpritePreview";
import Range from "./components/Range/Range";
import AssetInfo from "./components/AssetInfo/AssetInfo";
import DownloadSpriteButton from "./components/DownloadSpriteButton/DownloadSpriteButton";
import Background from "./components/Background/Background";

var App = React.createClass ({
	getInitialState: function() {
		return {
			dragging: false,
			files: [],
			canvasWidth: 0,
			canvasHeight: 0,
			assetWidth: 0,
			assetHeight: 0,
			speed: 0.6
		};
	},
	
	componentDidMount: function() {
		document.body.addEventListener("dragenter", this.dragStart, false);
		document.body.addEventListener("dragover", this.dragStart, false);
		document.body.addEventListener("dragleave", this.dragEnd, false);
		document.body.addEventListener("dragend", this.dragEnd, false);
		document.body.addEventListener("drop", this.dropped, false);
	},
	
	dragStart: function(e) {
		e.stopPropagation();
  		e.preventDefault();
		this.setState({ dragging: true });
	},
	
	dragEnd: function(e) {
		e.stopPropagation();
  		e.preventDefault();
		this.setState({ dragging: false });
	},
	
	dropped: function(e) {
		e.stopPropagation();
  		e.preventDefault();
		validate(e.dataTransfer.files, 
			function(dragging, files, canvasWidth, canvasHeight, assetWidth, assetHeight) {
				this.setState({
					dragging: dragging,
					files: files,
					canvasWidth: canvasWidth,
					canvasHeight: canvasHeight,
					assetWidth: assetWidth,
					assetHeight: assetHeight
				});
			}.bind(this));
	},
	
	generateSprite: function(el) {
		this.refs["spritePreview"].generateSprite();
	},
	
	changeSpeed: function(speed) {
		this.setState({ speed: speed });
	},
	
	render: function() {
		if (this.state.files.length === 0) {
			const style = "dropbox" + (this.state.dragging ? " dragging" : "");
			return (
				<div className={style}>
					<div className="front">
						<Credits />
						<Intro />
						<Help />
					</div>
					<Background />
				</div>
			);
		} else {
			return (
				<div className="dropbox">
					<Tip />
					<SpritePreview 
						ref="spritePreview"
						images={this.state.files}
						canvasWidth={this.state.canvasWidth}
						assetWidth={this.state.assetWidth}
						assetHeight={this.state.assetHeight}
						speed={this.state.speed} />
					<Range
						min={0.1} 
						max={3} 
						step={0.1}
						speed={this.state.speed}
						onChange={(speed) => this.changeSpeed(speed)} />
					<AssetInfo 
						assetWidth={this.state.assetWidth} 
						assetHeight={this.state.assetHeight} />
					<DownloadSpriteButton 
						onClick={() => this.generateSprite()} 
						canvasWidth={this.state.canvasWidth} 
						canvasHeight={this.state.canvasHeight} />
				</div>
			);
		}
	}
});

ReactDOM.render(<App/>, document.querySelector("#myApp"));
import React from 'react';
require("./Range.css");

export default React.createClass ({    
    handleChange: function(event) {
        this.props.onChange(event.target.value);
    },
		
	render: function() {
        return (
            <div id="result">
                <span>{this.props.min}</span>
                <input 
                    id="range" 
                    type="range" 
                    value={this.props.speed}
                    onChange={this.handleChange}
                    onMouseUp={this.handleChange}
                    min={this.props.min} 
                    step={this.props.step} 
                    max={this.props.max} /> 
                <span>{this.props.max}</span>
                <br />
                Time: <span>{this.props.speed} s</span>
            </div>
        );
	}
});
export default function(files, callback) {
    var images = [];
    var canvasWidth = 0;
    var canvasHeight = 0;
    var assetWidth = 0;
    let counter = 0;
    
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        
        // Test if this is an image
        var imageType = /^image\//;
        if (!imageType.test(file.type)) {
            alert("Not all assets are images");
            return;
        }
        
        var reader = new FileReader();
        
        // This will be run when initiated below
        reader.onload = function(event){
            var img = new Image();
            
            // This will be run on set src below
            img.onload = function() {
                // Calculate width and height
                if (img.width > assetWidth) {
                    assetWidth = img.width;
                }
                if (img.height > canvasHeight) {
                    canvasHeight = img.height;
                }
                canvasWidth += img.width;
                counter++; 
                
                // Call the callback
                if (counter === files.length) {
                    callback(false, images, canvasWidth, canvasHeight, assetWidth, canvasHeight);
                }
            }.bind(this);
            images.push(img);
            
            // Initiate onload
            img.src = event.target.result;
        }.bind(this);
        
        // Initiate reader
        reader.readAsDataURL(files[i]);      
    }
}
setInterval(
    ()=>{
    var blur = document.getElementById("blur").value;
    
    var brightness = 
    document.getElementById("brightness").value;
 
 var contrast = document.getElementById("contrast").value;  
 
 var grayscale = document.getElementById("grayscale").value;
 
 var hue = document.getElementById("hue").value;
 
 var invert = document.getElementById("invert").value;
 
 var opacity = document.getElementById("opacity").value;
 
 var saturate = document.getElementById("saturate").value;
 
 var sepia = document.getElementById("sepia").value;
    //image
    var image = document.getElementById("image");
   
 image.style.filter = "blur("+blur+"px)" 
 + "brightness("+brightness+"%)"
 + "contrast("+contrast+"%)"
 + "grayscale("+grayscale+"%)"
 + "hue-rotate("+hue+"deg)"
 + "invert("+invert+"%)"
 + "opacity("+opacity+"%)"
 + "saturate("+saturate+"%)"
 + "sepia("+sepia+"%)";    
    } 
  
 );
 
 
 
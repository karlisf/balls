function selectBalls(){
  

    const svgElements = document.querySelectorAll('ellipse');

    svgElements.forEach(function (svgElement) {
        svgElement.style.fill = "white";
        svgElement.addEventListener("dragover", allowDrop);
        svgElement.addEventListener("drop", drop);
    });
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
     event.preventDefault();
    var sourceData = event.dataTransfer.getData("text");
    // var circle = document.getElementById(circleId);
    var rect = event.target;
    rect.style.fill = sourceData;
}

window.onload = function() {
    const svgElement = document.getElementById('string-preview');
        selectBalls()
  };

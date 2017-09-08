// counter code
var button = document.getElementById('counter');
var counter = 0;

button.onclick = function(){
    
    // make request to te counter end points
    
    //get the count and store it in a var
    
    //render the count value
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
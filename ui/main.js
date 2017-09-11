// counter code
var button = document.getElementById('counter');

button.onclick = function(){
    
    // create a request to the counter end points
    var request = new XMLHttpRequest();
    
    //get the response and store it in a var
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
        //Take some action
        if (request.status == 200) {
            var response = request.ResponseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
            }
        }
    }
    
    // Make a request
    request.open ('GET', 'http://aeroshru8931.imad.hasura-app.io/counter', true);
    request.send(null);
}
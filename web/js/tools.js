var Tools = (function(){

var get = function(url,callback){

    var request = new XMLHttpRequest();
    request.open('GET',url,true);
    console.log('in request');
    request.onload = function(){
        if(request.status >= 200 && request.status < 400){

            var res = JSON.parse(request.responseText);
            callback(res);

        }else{

            console.log('Server Error');
        }

    }

    request.onerror = function(){
        console.log('Server konnte nicht erreicht werden');
    }

    request.send();
}

return{

    get:get
}

})()
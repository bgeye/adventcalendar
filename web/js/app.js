var App = (function(t,k){

var today = new Date().getDate();
var days = 24;
var doors;
var dayId = today -1;
var container = document.querySelector('.container');
var imgArray = [];


var init = function(){
    //set eventhandler to open door
    container.addEventListener('click',function(e){

            console.log(e.target);

            if(e.target && e.target.matches('.container .item')
            ||e.target && e.target.matches('.container .day')){
                openDoor(e);
            }
        })
    createDoors();
    openDoorLastDays();
    getImage();

}

//create doors
function createDoors(){
    var row = 0;
    for(var i = 0;i < days;i++){
        var doorItem = document.createElement('div');
        doorItem.id = 'door'+i;
        if(i%4 == 0){           //row with 4 elements
            row = row +1;
        }
        if (row%2 == 0){
                if(i%2==0){

                    doorItem.classList.add('item','red');

                }else{
                    doorItem.classList.add('item','cyan');
                }
        }else{

                if(i%2==0){

                    doorItem.classList.add('item','cyan');

                }else{
                    doorItem.classList.add('item','red');
                }
        }
                var doorNumber = document.createElement('span');
                doorNumber.classList.add('day');
                doorNumber.innerText = i+1;
                container.appendChild(doorItem);
                doorItem.appendChild(doorNumber);
    }

    //get all doors after creation
    doors = document.querySelectorAll('.item')
}


function setImages (data){
    doors.forEach(function(element,index){
    element.style.backgroundImage = 'url('+data[index].images.original.url+')';
    })
}




function openDoorLastDays(){
    doors.forEach(function(element,index){

        var doorId = index;
        if(doorId < today-1){
            element.classList.remove('red','cyan');
            element.classList.add('grey');
        }
    })

}

function openDoor(event){
    console.log('event target: '+event.target.innerText);
    console.log('doors: '+doors);
    console.log('dayId, today, doorsDayId.ID: '+dayId, today,doors[dayId].id);

   if(today == event.target.innerText){
         document.getElementById(doors[dayId].id).classList.remove('red','cyan');
         document.getElementById(doors[dayId].id).classList.add('grey');
    }else if(event.target.innerText < today){

        alert("Du Döööfiii! Dieses Türchen, wurde bereits geöffnet! Versuchs noch einmal!:-)");
    }else{

        alert("Du Schlingel! Dieses Türchen darf noch nicht geöffnet werden!");
    }
}


function getImage(){
    //giphy api
    var url = k.apikey();
    console.log('in getImage: '+url);
    t.get(url,function(res){

        setImages(res.data);
    })
}

return{
    init:init
};

})(Tools,Key)
App.init();












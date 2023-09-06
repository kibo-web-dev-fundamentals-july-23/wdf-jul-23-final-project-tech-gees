var counter=1;
let timer = setInterval(function(){
    document.getElementById?("radio" + counter).checked=true;
        counter++;
        if(counter > 4){
            counter = 1;
        }
    },5000);
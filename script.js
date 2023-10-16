function countdownFromTen(callback){
    function displayCountDown(number){
        var createElement = document.getElementById("countdown");
        createElement.innerText=number;
    }

    setTimeout(function(){
        displayCountDown(10);
        setTimeout(function(){
            displayCountDown(9);
            setTimeout(function(){
                displayCountDown(8);
                setTimeout(function(){
                    displayCountDown(7);
                    setTimeout(function(){
                        displayCountDown(6);
                        setTimeout(function(){
                            displayCountDown(5);
                            setTimeout(function(){
                                displayCountDown(4);
                                setTimeout(function(){
                                    displayCountDown(3);
                                    setTimeout(function(){
                                        displayCountDown(2);
                                        setTimeout(function(){
                                            displayCountDown(1);
                                            setTimeout(function(){
                                                var createElement = document.getElementById("countdown");
                                                 createElement.innerText="Happy Independance Day";  
                                                 if(callback()){
                                                    callback();
                                                 }                                               
                                            },1000);
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
}
countdownFromTen();
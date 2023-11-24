let counter = document.getElementById("maths");

function myButns(calculation) {

    if (calculation == 'res') 
        counter.value = 0 ;
    
    else
    counter.value = +counter.value+calculation
    
}


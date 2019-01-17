/*while(, , ){
    console.log()
}
Want it to make:
1. something appear on the page
2. so long as a certain input is received
*/

function eatRamen(){

    var input = document.getElementById('number');
 
    var y = input.value;

    if(y < 100){
        console.log('delicious');
        window.alert('delicious');
    }
    else {
        console.log('explosion');
        window.alert('explosion is imminent');
    }
}
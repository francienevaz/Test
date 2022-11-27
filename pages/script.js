let kwh = [];

function add() {

    let mKwh = document.querySelector("#mediakwh").value;

    let res = document.querySelector("#resKwh").innerHTML;    

    if (mKwh !== '' && kwh.length <= 11){    

    kwh.push(mKwh);
  
    res += `<li>${kwh}</li>`;
    
    document.querySelector("#resKwh").innerHTML = res;

    document.querySelector("#mediakwh").value = null;
 
    // document.querySelector("#mediakwh").value = focus();

    }   
}

function handleKeyUp (event) {
    if (event.keyCode === 13) {
        add()
    }
}

document.addEventListener('keyup', handleKeyUp);
let kwh = [];

function add() {

    let mKwh = document.querySelector("#mediakwh").value;

    let res = document.querySelector("#resKwh").innerHTML;    

    if (mKwh !== '' && kwh.length < 11){    

    kwh.push(mKwh);

    for (let i = 0; i <= kwh.length; i++) {

        res = `<li>${kwh}</li>`;
    
        document.querySelector("#resKwh").innerHTML = res;

        mKwh = null;
    }
  
    
 
    //mKwh = focus();

    }   
}

function handleKeyUp (event) {
    if (event.keyCode === 13) {
        add()
    }
}

document.addEventListener('keyup', handleKeyUp);
let kwh = [];

function add() {

    let mKwh = document.querySelector("#mediakwh").value;

    let res = document.querySelector("#resKwh").innerHTML;    

    if (mKwh !== ''){    

    console.log(kwh.push(mKwh));    

    for (let i = 0; i < kwh.length; i++) {

        res += `<li>${kwh.pop()}</li>`;

    }

    console.log(kwh)
    
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
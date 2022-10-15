function add() {

    let mKwh = document.querySelector("#mediakwh").value;

    let res = document.querySelector("#resKwh").innerHTML;

    let kwh = [];

    kwh.push(mKwh);

    res += `<li>${kwh}</li>`;
    
    document.querySelector("#resKwh").innerHTML = res;

    document.querySelector("#mediakwh").value = null;

    document.querySelector("#mediakwh").value = focus();

}
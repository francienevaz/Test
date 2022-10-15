function add() {

    let mKwh = document.querySelector("#mediakwh").value;

    let res = document.querySelector(".resKwh");

    for (let i = 0; i <= mKwh.length; i++) {
        
        res.innerHTML = mKwh;     
        
    }


}
const card = document.querySelector('.card');
const companies = document.querySelector('.companies');
const btnAdd = document.getElementById('add');
const btnCancel = document.getElementById('cancelar');
const btnAddCompany = document.getElementById('addCompany');

const inputCompanyName = document.getElementById('company');
const inputProprietaryName = document.getElementById('proprietary');
const inputCNPJ = document.getElementById('cnpj');
const inputs = document.querySelector('.inputs');

const statusActive = document.getElementById("ativa");
const statusInative = document.getElementById("inativa");
let statusCompany = "";

const p = document.querySelectorAll('.companies p');

const messageFill = document.querySelector('.input-box span');

    function checkClicked () {
        if(statusActive.checked) {
            
            statusInative.disabled = true;
            statusCompany = "Ativa";
        } else if (statusInative.checked) {
            statusActive.disabled= true;
            statusCompany = "Inativa";
        } else {
            statusCompany = "";
            statusActive.disabled = false;
            statusInative.disabled =false;
        }
    }

    function getData () {
        localStorage.setItem('empresa', inputCompanyName.value);
        localStorage.setItem('proprietário', inputProprietaryName.value);
        localStorage.setItem('cnpj', inputCNPJ.value);
        localStorage.setItem('status', statusCompany);
    }


    const addCompany =  async (company, proprietary, cnpj, status) => {

        
        let companyData = {};
        companyData['name'] = await company;
        companyData['representant'] = await proprietary;
        companyData['cnpj']= await cnpj;
        companyData['status'] = await status;

        card.style.display = "none";
        companies.style.display = "block";

        p[0].innerHTML = `<p>Nome da Empresa: ${companyData.name}</p>`
        p[1].innerHTML = `<p>Representante: ${companyData.representant}</p>`
        p[2].innerHTML = `<p>CNPJ: ${companyData.cnpj}</p>`
        p[3].innerHTML = `<p>Status: ${companyData.status}</p>`

        getData();
    }

    inputs.addEventListener("blur", () => {
        messageFill.classList.add('hidden');
    });    
    
    btnAddCompany.addEventListener("click", (event) => {
        event.preventDefault();
        addCompany(inputCompanyName.value, inputProprietaryName.value, inputCNPJ.value, statusCompany);
    });
    

    btnAdd.addEventListener("click", () => {
        card.style="display: block";
    })
    btnCancel.addEventListener('click',()=>{
        location.reload();
    })
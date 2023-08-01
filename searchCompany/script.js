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

const companyData = {};
const datas = [];

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

    const addCompany = (company, proprietary, cnpj, status) => {
           
        companyData['name'] = company;
        companyData['representant'] =  proprietary;
        companyData['cnpj']=  cnpj;
        companyData['status'] =  status;

        card.style.display = "none";
        companies.style.display = "block";

        localStorage.setItem('empresa', companyData.name);
        localStorage.setItem('proprietário', companyData.representant);
        localStorage.setItem('cnpj', companyData.cnpj);
        localStorage.setItem('status', companyData.status);	

        datas.push({
            name: localStorage.getItem('empresa'),
                    representant: localStorage.getItem('proprietário'),
                    cnpj: localStorage.getItem('cnpj'),
                    status: localStorage.getItem('status')
	})
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
    btnCancel.addEventListener('click',() =>{
        location.reload();
    })

console.log(datas)
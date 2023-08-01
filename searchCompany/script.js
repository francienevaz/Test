const card = document.querySelector('.card');
const companies = document.querySelector('.companies');
const btnAdd = document.getElementById('add');
const btnCancel = document.getElementById('cancelar');
const btnAddCompany = document.getElementById('addCompany');

let inputCompanyName = document.getElementById('company');
let inputProprietaryName = document.getElementById('proprietary');
let inputCNPJ = document.getElementById('cnpj');
let inputs = document.querySelector('input');

const statusActive = document.getElementById('ativa');
const statusInactive = document.getElementById('inativa');
let statusCompany = '';

const p = document.querySelectorAll('.companies p');

const messageFill = document.querySelector('.input-box span');

let datas = [];

function checkClicked() {
    if (statusActive.checked) {
        statusInactive.disabled = true;
        statusActive.checked = false;
        statusCompany = 'Ativa';
    } else if (statusInactive.checked) {
        statusActive.disabled = true;
        statusInactive.checked = false;
        statusCompany = 'Inativa';
    } else {
        statusCompany = '';
        statusActive.disabled = false;
        statusInactive.disabled = false;
    }
}


function addCompany(company, proprietary, cnpj, status) {
    const companyData = {
        name: company,
        representant: proprietary,
        cnpj: cnpj,
        status: status,
    };

    localStorage.setItem('empresa', companyData.name);
    localStorage.setItem('proprietário', companyData.representant);
    localStorage.setItem('cnpj', companyData.cnpj);
    localStorage.setItem('status', companyData.status);	
    
    card.style.display = 'none';
    companies.style.display = 'block';    

    datas.push(companyData);
    console.table(localStorage);

    p[0].textContent = `Nome da empresa: ${localStorage.getItem('empresa')}`;
    p[1].textContent = `Representante: ${localStorage.getItem('proprietário')}`;
    p[2].textContent = `CNPJ: ${localStorage.getItem('cnpj')}`;
    p[3].textContent = `Status: ${localStorage.getItem('status')}`;

    //reset

    inputCompanyName.value = "";
    inputProprietaryName.value = "";
    inputCNPJ.value = "";
    statusActive.checked = false;
    statusInactive.disabled = false;

}

inputs.addEventListener('blur', () => {
    messageFill.classList.add('hidden');
});

btnAddCompany.addEventListener('click', (event) => {
    event.preventDefault();
    addCompany(inputCompanyName.value, inputProprietaryName.value, inputCNPJ.value, statusCompany);
});

btnAdd.addEventListener('click', () => {
    card.style.display = 'block';
});

btnCancel.addEventListener('click', () => {
    location.reload();
});

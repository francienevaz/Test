const card = document.querySelector('.card');
const companies = document.querySelector('.companies');
const btnAdd = document.getElementById('add');
const btnCancel = document.getElementById('cancelar');
const btnAddCompany = document.getElementById('addCompany');
const btnSearch = document.getElementById('btnFilter');

const inputCompanyName = document.getElementById('company');
const inputProprietaryName = document.getElementById('proprietary');
const inputCNPJ = document.getElementById('cnpj');
const inputSearch = document.getElementById("search");

const statusActive = document.getElementById("ativa");
const statusInative = document.getElementById("inativa");
let statusCompany = "";

// const messageFill = document.querySelector('.input-box span');

const checkClicked = () => {
	if (statusActive.checked) {
		statusInative.disabled = true;
		statusActive.checked = false;
		statusCompany = 'Ativa';
	} else if (statusInative.checked) {
		statusActive.disabled = true;
		statusInative.checked = false;
		statusCompany = 'Inativa';
	} else {
		statusCompany = '';
		statusActive.disabled = false;
		statusInative.disabled = false;
	}
};

const addCompany = (company, proprietary, cnpj, status) => {
    let datas = [];

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
    // Modifica os dados do JSON conforme necessário
    data.cadastro = {
        name : company,
	    representant: proprietary,
	    cnpj: cnpj,
	    status: status
    }

    datas.push(data);

    card.style.display = "none";
    companies.style.display = "block";

    // reset
    inputCompanyName.value= "";
    inputProprietaryName.value="";
    inputCNPJ.value="";
    statusActive.checked = false;
    statusInative.checked= false;

    datas.forEach((cadastro)=>{

        let p = document.createElement("p");
            p.textContent = `Nome da Empresa: ${cadastro.name}`;
                companies.appendChild(p);
                p = document.createElement("p");
                p.textContent = `Representante: ${cadastro.representant}`;
                companies.appendChild(p);
                p = document.createElement("p");
                p.textContent = `CNPJ: ${cadastro.cnpj}`;
                companies.appendChild(p);
                p = document.createElement("p");
                p.textContent = `Status: ${cadastro.status}`;
                companies.appendChild(p);
            });

    })
    .catch(error => console.error('Ocorreu um erro:', error));
}

btnAddCompany.addEventListener("click", (event) => {
    event.preventDefault();
    addCompany(inputCompanyName.value, inputProprietaryName.value, inputCNPJ.value, statusCompany);
});


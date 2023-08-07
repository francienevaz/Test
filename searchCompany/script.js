const card = document.querySelector('.card');
const companies = document.querySelector('.companies');
const btnAdd = document.getElementById('add');
const btnCancel = document.getElementById('cancelar');
const btnAddCompany = document.getElementById('addCompany');
const btnSearch = document.getElementById('btnFilter');

const inputCompanyName = document.getElementById('company');
const inputProprietaryName = document.getElementById('proprietary');
const inputCNPJ = document.getElementById('cnpj');
const inputs = document.querySelector('.inputs');
const inputSearch = document.getElementById("search");

const statusActive = document.getElementById("ativa");
const statusInative = document.getElementById("inativa");
let statusCompany = "";

const messageFill = document.querySelector('.input-box span');

let datas = [];

    function checkClicked() {
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
    }

    const addCompany = (company, proprietary, cnpj, status) => {

        if(localStorage.dataCompany) {
		datas = JSON.parse(localStorage.getItem('dataCompany'));
	}

	let newCompany = {
		name : company,
		representant: proprietary,
		cnpj: cnpj,
		status: status
	};

	datas.push(newCompany);

	card.style.display = "none";
    companies.style.display = "block";
	
	// reset
	inputCompanyName.value= "";
	inputProprietaryName.value="";
	inputCNPJ.value="";
	statusActive.checked = "false";
	statusInative.checked= "false";	
	
	localStorage.dataCompany = JSON.stringify(datas);

	let data = JSON.parse(localStorage.dataCompany);

   	data.forEach((cadastro)=>{

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
    })

 }

const search = () => {
	let data = JSON.parse(localStorage.dataCompany);
    let inputSearch = document.getElementById('search').value;
	
	for (let i in data) {

        // console.log(data[i])

		if (data[i].name.toLowerCase().includes(data[i].name.toLowerCase())) {
			let p = document.createElement("p");
            p.textContent = `Nome da Empresa: ${data.name}`;
            companies.appendChild(p);
            p = document.createElement("p");
            p.textContent = `Representante: ${data.representant}`;
            companies.appendChild(p);
            p = document.createElement("p");
            p.textContent = `CNPJ: ${data.cnpj}`;
            companies.appendChild(p);
            p = document.createElement("p");
            p.textContent = `Status: ${data.status}`;
            companies.appendChild(p);
		i++;
		} else {
			let p = document.createElement("p");
			p.textContent = `Cadastro não encontrado`;
            companies.appendChild(p);
		}
	}
	
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
btnCancel.addEventListener("click",() =>{
        location.reload();
})

btnSearch.addEventListener("click", () => {
    search();
})
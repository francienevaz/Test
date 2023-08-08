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
	let datas = []; 
	
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

const search = (input) => {
	let data = JSON.parse(localStorage.dataCompany);
	
       	for (let  i in data) {
		
		if(data[i].name == input || data[i].representant == input || data[i].cnpj == input  || data[i].status == input ) {
			let p = document.createElement("p");
       			p.textContent = `Nome da Empresa: ${data[i].name}`;
        			companies.appendChild(p);
			p.textContent = `Nome do Representante: ${data[i].representant}`;
        			companies.appendChild(p);
			p.textContent = `CNPJ: ${data[i].cnpj}`;
        			companies.appendChild(p);
			p.textContent = `Status: ${data[i].status}`;
        			companies.appendChild(p);
		} 
	}
	
	let p = document.createElement("p");
       	p.textContent = `${input} não consta em nosso sistema, clique em "Adicionar" para fazer o seu cadastro!`;
	companies.appendChild(p);
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
    search(inputSearch.value);
})
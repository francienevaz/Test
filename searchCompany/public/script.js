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
let stopFunction = true;

const messageFill = document.querySelector('.input-box span');

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

	if(localStorage.dataCompany) {
	datas = JSON.parse(localStorage.getItem('dataCompany'));
}	
	for (let  i in datas) {
		let name = datas[i].name.toLowerCase();
		let represent = datas[i].representant.toLowerCase();
		let CNPJ = datas[i].cnpj.toString();
		
		if (name.includes(company) || represent.includes(proprietary)  || CNPJ.includes(cnpj)) {	
			return alert(`Já existe uma empresa cadastrada com o nome ${company}`);			
		} 
	}

let newCompany = {
	name : company,
	representant: proprietary,
	cnpj: cnpj,
	status: status
};

datas.push(newCompany);

// Atualiza os dados no localStorage
localStorage.setItem('dataCompany', JSON.stringify(datas));

card.style.display = "none";
companies.style.display = "block";

// reset
inputCompanyName.value= "";
inputProprietaryName.value="";
inputCNPJ.value="";
statusActive.disabled = false;
statusInative.disabled = false;		

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
	});

};

const search = async (input) => {

let data = []; 

	if (inputSearch.value == "" && stopFunction) {

		let p = document.createElement("p");
		companies.appendChild(p);
		companies.style.display = "block";
		p.textContent = "Por favor digite um valor válido!"	
		return stopFunction = false;
	}

	if (localStorage.dataCompany && inputSearch.value !== "") {
	data = await JSON.parse(localStorage.getItem('dataCompany'));
	}

let found = false;

card.style.display = "none";
companies.style.display = "block";
companies.textContent = ""; 

for (let  i in data) {
	let name = data[i].name.toLowerCase();
	let proprietary = data[i].representant.toLowerCase();
	let cnpj = data[i].cnpj.toString();
	let status = data[i].status.toLowerCase();
	
	if (name.includes(input) || proprietary.includes(input)  || cnpj.includes(input)  || status.includes(input)) {
		
		let p = document.createElement("p");
		p.textContent = `Nome da Empresa: ${name}`;
		companies.appendChild(p);
		p = document.createElement("p");
		p.textContent = `Representante: ${proprietary}`;
		companies.appendChild(p);
		p = document.createElement("p");
		p.textContent = `CNPJ: ${cnpj}`;
		companies.appendChild(p);
		p = document.createElement("p");
		p.textContent = `Status: ${status}`;
		companies.appendChild(p);
		found = true;
		document.getElementById("search").value = "";
		document.getElementById("search").focus();
				
	} 
}

if (!found){
	let p = document.createElement("p");
	p.textContent= `${input} não consta em nosso sistema, clique em "Adicionar" para fazer o seu cadastro!`;
	companies.appendChild(p);
}
};

const pressEnter = (event) => {	
	if (event.keyCode === 13 && inputSearch.value !== "") {
	  search(inputSearch.value.toLowerCase())
	}
	if (event.keyCode === 13 && inputCompanyName.value !== "") {
		inputProprietaryName.focus();
	}
	if (event.keyCode === 13 && inputProprietaryName.value !== "") {
		inputCNPJ.focus();
	}
}

inputCompanyName.addEventListener("blur", () => {
messageFill.classList.remove('hidden');
});    
inputProprietaryName.addEventListener("blur", () => {
messageFill.classList.remove('hidden');
});      
inputCNPJ.addEventListener("blur", () => {
messageFill.classList.remove('hidden');
});

btnAddCompany.addEventListener("click", async (event) => {
    event.preventDefault();
    const company = inputCompanyName.value;
    const proprietary = inputProprietaryName.value;
    const cnpj = inputCNPJ.value;
    
    // Você pode usar uma URL adequada para o seu servidor
    const response = await fetch('/adiciona-empresa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ company, proprietary, cnpj, status: statusCompany })
    });

    if (response.ok) {
        console.log('Empresa adicionada com sucesso!');
        // Atualize a interface do usuário conforme necessário
		addCompany(company, proprietary, cnpj, statusCompany)

    } else {
        console.error('Erro ao adicionar empresa');
    }
});

btnAdd.addEventListener("click", () => {
card.style="display: block";
companies.style.display = "none"; 
});
btnCancel.addEventListener("click",() =>{
location.reload();
});

btnSearch.addEventListener("click", (event) => {
event.preventDefault();
search(inputSearch.value.toLowerCase());
});

document.addEventListener("keydown", pressEnter);


let cep = document.getElementById('cep').value;
let btn = document.getElementById('btn');
let res = document.querySelector('.res');

const viaCEPUrl = `https://viacep.com.br/ws/${cep}/json/`;

btn.addEventListener('click', ()=>{
  fetch(viaCEPUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação');
    }
    return response.json();
  })
  .then(data => {
    const { localidade, uf } = data;
    const endereco = `${localidade}, ${uf}, Brasil`; // Construa o endereço para geocodificação
    const geocodingUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${endereco}&limit=1`;

    return fetch(geocodingUrl);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro na solicitação de geocodificação');
    }
    return response.json();
  })
  .then(data => {
    const { lat, lon } = data[0];
    console.log(`Latitude: ${lat}, Longitude: ${lon}`);
  })
  .catch(error => {
    console.error('Erro:', error);
  });
})


// const url = `https://nominatim.openstreetmap.org/search?format=json&postalcode=${cep}&country=Brasil&limit=1`;

// btn.addEventListener('click', ()=> {
//     fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Erro na solicitação');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); // Aqui você manipula os dados recebidos, como latitude e longitude
//   })
//   .catch(error => {
//     console.error('Erro:', error); // Manipule erros aqui
//   });
// })


const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = 3000;

app.use(express.json());

app.post('/adicionar-empresa', async (req, res) => {
    const { company, proprietary, cnpj, status } = req.body;
    const newCompany = {
        name: company,
        representant: proprietary,
        cnpj: cnpj,
        status: status
    };

    try {
        // Leia o arquivo existente
        const existingData = await fs.readFile('data.json', 'utf-8');
        const datas = JSON.parse(existingData);

        // Adicione o novo objeto ao array datas
        datas.push(newCompany);

        // Escreva os dados de volta no arquivo
        await fs.writeFile('data.json', JSON.stringify(datas, null, 2), 'utf-8');

        res.status(200).send('Empresa adicionada com sucesso!');
    } catch (error) {
        console.error('Erro ao adicionar empresa:', error);
        res.status(500).send('Erro ao adicionar empresa');
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

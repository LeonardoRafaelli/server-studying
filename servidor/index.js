const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = 3000;

app.use(express.json());

const listaPessoas = [
    {
        id: 1,
        nome: 'João'
    },
    {
        id: 2,
        nome: 'Leo'
    },
    {
        id: 3,
        nome: 'Gus'
    },
    {
        id: 4,
        nome: 'Miloca'
    },
]


// GET      -> Buscar informações // req.query
// POST     -> Criar informações // req.body
// PUT      -> Alterar informações // req.body
// DELETE   -> Deltear informações // req.params

// res.json -> res.json(pessoa);

app.get('/api/pessoas', (req, res) => {
    res.send(listaPessoas);
})

app.get('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = listaPessoas.find(p => p.id == id);
    res.send(pessoa);
})


app.post('/api/pessoas', (req, res) => {
    console.log(req.body);
    const pessoa = req.body;
    pessoa.id = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
})

app.put('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const pessoa = req.body;
    const index = listaPessoas.findIndex(p => p.id == id);
    pessoa.id = id;
    listaPessoas[index] = pessoa;
    res.json(pessoa);
    // Manda um json como resposta para o frontend

})

app.delete('/api/pessoas/:id', (req, res) => {
    const id = req.params.id;
    const index = listaPessoas.findIndex(p => p.id == id);
    listaPessoas.splice(index, 1);
    res.json(listaPessoas);
})

app.get('/', (req, res) => {
    res.send("Gu gu dada");
})

app.get('/home', (req, res) => {
    res.send("Welcome home")
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost${port}`)
})
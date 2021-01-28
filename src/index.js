const express = require('express')

const app = express();


app.listen(3000, () => console.log('Servidor em execução'))

app.get('/', (req, res) =>{
    res.send('Inicial')
})
app.get('/contato', (req, res) => {
    res.send('CONTATO')
})
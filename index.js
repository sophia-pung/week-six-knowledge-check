import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 8082;

app.use(cors());

const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
})

app.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client', 'about.html'));

});

app.get('/contactme', (req, res) =>{
    res.sendFile(path.join(__dirname, 'client', 'contactme.html'));

});

app.use((req, res) => {
    res.status(404);
    res.sendFile(path.join(__dirname, 'client', '404.html'));
});



app.listen(PORT, () =>{ console.log(`HOLA! this server in running on port ${PORT}`)});

import express from 'express';

const app = express();

const PORT = 3007

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    const person = {name : 'Donald Duck', occupation : 'Plumber', favoriteColor : 'Blue'};
    res.render('home', {person});
});

app.get('/friends', (req,res) => {
    const friends = ['Mikey', 'Goofey', 'Minnie', 'Daisy'];
    res.render('friends', {friends});
})

app.get('/movies', (req,res) => {
    const movies = ['Grand Budapest Hotel', 'Rush Hour', 'What We Do In The Shadows', 'Interstellar', 'Everything Everywhere, All At Once'];
    res.render('movies', {movies});
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
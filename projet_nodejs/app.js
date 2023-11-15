const express = require('express')
const app = express();
const connectDB = require('./ConnexionDB/connexiondb');
const controller = require('./Controlleur/controlleur');
const dataRoutes = require('./Router/routage');
const path = require('path');

app.listen(3000,function(){
    console.log("Server is running and listening in port 3000");
}) 
//fonction Middleware qui prend 3 parametres
//Ce middleware sera utilisé pour n'importe quel chemin
const LoggerMiddleware = (req,res,next) =>{
    console.log(`Logged  ${req.url} ${req.method} -- ${new Date()}`)
    next() //pour passer au middleware suivant
}
app.use(LoggerMiddleware); // utilisation de la fonction middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json({extended:false}));
app.use (express.static ('public'))

connectDB();


app.use(dataRoutes);

// Middleware pour les vues avec Jade
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

// Page d'accueil
app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil'});
  });
  
  // Page À propos
  app.get('/about', (req, res) => {
    res.render('about', { title: 'À propos' });
  });
  
  // Page Contact
  app.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
  });
  
app.get('/add', (req, res) => {
    res.render('add_produit', { title: 'Ajouter un produit' });
  });


  app.get('/detail', (req, res) => {
    res.render('detail', { title: 'Detail d\'un produit' });
  });
  
  app.get('/search', (req, res) => {
    res.render('search_produit', { title: 'Recherche d\'un produit' });
  });



  
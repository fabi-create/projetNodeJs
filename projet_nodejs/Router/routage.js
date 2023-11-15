const controller = require('../Controlleur/controlleur');
const express = require("express");
const router = express.Router();

//Routes pour tester avec avec interface en utilisant le moteur de template Jade

//Route d'ajout d'un nouveau produit
router.post('/addProduit', controller.createData);
// Route afficher la liste des produits
router.get('/', controller.SearchData);

//router pour valider la modification d'un produit
router.post('/modifyProduit/:id', controller.FindByIDUpdateData);

//Route pour supprimer un produit
//Nous avons la methode get ici car on doit trouvé le produit partir de son id avant de le supprimer
router.get('/produit/:id', controller.FindByIdDeleteData);

//Route pour afficher les details d'un produit
router.get('/detail/:id',controller.SearchDataById);

//Router permettant de recupere les informations du produit à supprimer puis l'afficher dans un formulaire
router.get('/update/:id',controller.SearchDataByIdProduit);




// Routes pour tester avec le client REST
router.post('/ajoutProduit', controller.createDonnee);


router.get('/list', controller.SearchDonnee);


router.patch('/product/:id', controller.FindByIDUpdateDonnee);


router.delete('/product/:id', controller.FindByIdDeleteDonnee);
module.exports = router;
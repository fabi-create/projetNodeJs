const Produit = require('../Model/model');


//  Les fonctions pour tester avec l'interface en utilisant le moteur de template jade
const createData = (req, res) => {
    const  newProduit = new Produit(req.body);
    newProduit.save();
    res.redirect('/');
  };

const SearchData = async (req,res) =>{
   const produits = await Produit.find();
    res.render('index',{produits});
}

const SearchDataById = async (req,res) =>{
    const produit = await Produit.findById(req.params.id);
    res.render('detail',{produit});
}

const SearchDataByIdProduit = async (req,res) =>{
    const produit = await Produit.findById(req.params.id);
    res.render('modify_produit',{produit});
}


const FindByIDUpdateData = async (req, res) => {
    try {
        const updatedProduit = await Produit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedProduit) {
            return res.status(404).send("Produit non trouvé");
        }
        const produits = await Produit.find(); // Récupérer la liste mise à jour des produits
        const response = {
            message: "Le produit a été mis à jour",
            produits: produits
        };
        res.redirect('/');

    } catch (err) {
        return res.send(err);
    }
};

 
const FindByIdDeleteData = async(req,res) =>{
    try {
        const oldProduit = await Produit.findByIdAndRemove(req.params.id);
        if (!oldProduit) {
            return res.status(404).send("Produit non trouvé");
        }

        const produits = await Produit.find(); // Récupérer la liste mise à jour des produits

        const response = {
            message: "Le produit a été supprimé",
            produits: produits
        };
        
        res.render('index', { produits });
    } catch (err) {
        return res.send(err);
    }
}

// Les fonctions pour tester avec le client rest
const createDonnee = (req, res) => {
    const  newProduit = new Produit(req.body);
    newProduit.save()
    .then(result =>{console.log(result),res.send(result)})
    .catch(error => {console.log(error),res.send(error)})
  };

const SearchDonnee = (req,res) =>{
    Produit.find()
    .then(result =>{console.log(result),res.send(result)})
    .catch(error => {console.log(error),res.send(error)})
}

const FindByIDUpdateDonnee = (req,res) =>{
    Produit.findByIdAndUpdate(
        req.params.id,
        req.body, 
        {new : true},
    )
    .then((newProduit) => {
        res.send(newProduit);
    })
    .catch((err) => {
        return res.send(err);
    });
}
 
const FindByIdDeleteDonnee = (req,res) =>{
    Produit.findByIdAndRemove(
        req.params.id,
    )
    .then((oldProduit) => {
        const response = {
            message : "Le produit a été supprimé",
            produit : oldProduit
        }
        res.send(response);
    })
    .catch((err) => {
        return res.send(err);
    });
}

module.exports = {
    //avec interface jade
    createData,
    SearchData,
    SearchDataById,
    FindByIDUpdateData,
    FindByIdDeleteData,
    SearchDataByIdProduit,

    //Client REST
    createDonnee,
    SearchDonnee,
    FindByIDUpdateDonnee,
    FindByIdDeleteDonnee,
  };
const mongoose = require('mongoose');

// Définition du schéma pour le modèle Produit
const ProduitSchema = new mongoose.Schema({
  nom: { type: String }, // Champ pour le nom du produit (de type String)
  prix: { type: Number}, // Champ pour le prix du produit (de type Number)
  description: { type: String } // Champ pour la description du produit (de type String)
});

// Création du modèle Produit à partir du schéma défini
const Produit = mongoose.model('Produit', ProduitSchema);

// Export du modèle Produit pour pouvoir l'utiliser dans d'autres fichiers
module.exports =Produit;



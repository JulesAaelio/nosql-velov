# Bases de données - NoSQL / MySQL - Projet

# Choix technologiques 

J'ai choisi d'utiliser Node.js pour développer mon API et réaliser mes requêtes vers les bases de données par soucis de 
simplicité , en effet : 
- Node.js n'est autre qu'une platforme permettant d'executer du Javascript, language que je maitrise. 
- Cette plateforme vient avec plusieurs modules qui permettent d' élaborer rapidement un prototype d'API. 
- Il existe un client MongoDB pour cette plateforme. 
- Il existe un ORM permettant de modeliser et requêter une base de donnée MySQL. 

J'ai choisi d' utiliser Angular pour développer l'interface utilisateur de mon application car: 
- C'est un framework JavaScript que je maitrise. 
- Il est conçu pour travailler avec une API REST de façon asynchrone. 
- Associé au module material il permet de mettre au point un prototype très rapidement.  


# Modélisation de la base de donnée. 

J'ai remarqué, dans les données fournies par le grand lyon, certaines propriétés qui pouvait être extraite dans une table distincte.
A l'inverse, les coordonnées géographiques dès lors qu'il s'agit d'une latitude et d'une longitude, ne nécéssitaient pas d'être séparées de leur objet parent. 

Ci-après le schéma de données: 

SCHEMA 


# Les fonctionnalités 

## Données 

### Import des données 
Les données sont mise à jour : 
- Toute les 5 minutes pour les stations vélov (par soucis de performance de ma machine)
- Toute les 24 heures pour les point d'intérêts, en accord avec la périodicité des mises à jour du Grand Lyon. 

Elle sont stockées à la foi dans une base de données MongoDB et dans un base de données relationelle mysql décrite précéddement. 

### Réplication 
Les données sont répliqués sur trois instances de MongoDB. 
Ce projet n'ayant valeur que d'exercice, les trois membres du cluster sont instanciés sur la même machine, dans un 
contexte de production il sera nécéssaire d'instancier les différents membres sur des machines physiques différentes. 


## Interface utilisateur
### Liste et carte des stations :
- La liste des statioins est triable grâce aux en-têtes du tableau. 
- Les marqueurs sont regroupés lorsque l'on réduit l'échelle de la garte. 

IMAGE 

### Recherche des stations proches d'un point d'intérêt : 
1. Entrer quelques caractères dans la barre de recherche. 
2. Séléctionner le point d'intérêt parmi les suggestions. 
3. Les stations les plus proches sont listées et affichées sur la carte.

IMAGE 


# Documentations d'installation. 
Frontend : [frontend/README.md]()\
Backend : [backend/README.md]()

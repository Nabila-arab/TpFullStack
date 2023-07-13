import ProduitPanier from "../Model/ProduitPanier.js"


export const ListePanier= async (req, res)=>{
    try{
        let c = await ProduitPanier.find()
        res.status(200).json(c)
    }catch (err){
        res.status(400).json(err)
    }
}



export const CreationPanier = async (req, res)=>{
    try{
        let {idClient, qteAchat,  idAnnonce } = req.body
        let c = await ProduitPanier.create({idClient, qteAchat,  idAnnonce  })
        res.status(200).json(c)
    }catch (err){
        res.status(400).json(err)
    }
    }



    export const SuppressionPanier= async (req, res)=>{
        try{
            //let {id} = req.params
            let c = await  ProduitPanier.findById({_id : req.params.id})
            c.deleteOne()
            res.status(200).json(c)
        }catch (err){
            res.status(400).json(err)
        }
        }

        // module.exports = {}

import Annonce from "../Model/Annonce.js"


export const ListeAnnonces= async (req, res)=>{
    try{
        let c = await Annonce.find()
        res.status(200).json(c)
    }catch (err){
        res.status(400).json(err)
    }
}


export const CreationAnnonce = async (req, res)=>{
    try{
       // let {nom, prix, description, photo ,qteDispo,idClient,createdAt, UpdateAt } = req.body
        let c = await Annonce.create(req.body)
        res.status(200).json(c)
    }catch (err){
        res.status(400).json(err)
    }
    }


    export const InfoAnnonce = async (req, res)=>{
        try{
            //let {id} = req.params
            let c = await Annonce.findById({nom : req.params.nom23})
            res.status(200).json(c)
        }catch (err){
            res.status(400).json(err)
        }
        }


        export const Modifier_Annonce = async (req, res)=>{
            try{
                let {nom : Newname, prix: Newprix , description: Newdescription, photo: Newphoto, qteDispo:NewqteDispo, idClient:NewidClient, createdAt:NewcreateAt, updatedAt:NewupdatedAt} = req.body 
                let c = await Annonce.findById({_id : req.params.id})
                c.nom = Newname
                c.prix = Newprix
                c.description = Newdescription
                c.photo = Newphoto
                c.qteDispo = NewqteDispo
                c.idClient = NewidClient
                c.createAt = NewcreateAt
                c.updatedAt = NewupdatedAt
                c.save()
                res.status(200).json(c)
            }catch (err){
                res.status(400).json(err)
            }
            }




            export const SuppressionAnnonce= async (req, res)=>{
                try{
                    //let {id} = req.params
                    let c = await Annonce.findById({_id : req.params.id})
                    c.deleteOne()
                    res.status(200).json(c)
                }catch (err){
                    res.status(400).json(err)
                }
                }

                // module.exports = {}


                export const AnnonceUser = async (req, res)=>{
                    try{
                        //let {id} = req.params
                        let c = await Annonce.find({nom : req.params.getAnnonceUser})
                        res.status(200).json(c)
                    }catch (err){
                        res.status(400).json(err)
                    }
                    }
            
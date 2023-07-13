import express from 'express'
import {ListeAnnonces, CreationAnnonce  ,InfoAnnonce  ,Modifier_Annonce, SuppressionAnnonce ,AnnonceUser } from '../../Controller/AnnonceController.js'
import { Auth } from '../Controller/UserController.js'
const router = express.Router()

router.get('/', ListeAnnonces)

router.post('/', CreationAnnonce )

router.get('/:nom23', InfoAnnonce )

router.put('/:id', Auth, Modifier_Annonce)

router.delete('/:id', Auth,SuppressionAnnonce )

router.get('/getAnnonceUser', Auth,AnnonceUser)

export default router 
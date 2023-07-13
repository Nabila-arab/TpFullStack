import express from 'express'
import { Auth } from '../Controller/UserController.js'

import { ListePanier,  CreationPanier ,SuppressionPanier} from '../../Controller/PanierController.js'

const router = express.Router()

router.get('/', ListePanier)

router.post('/', CreationPanier )

router.delete('/:id', Auth,SuppressionPanier)

export default router 
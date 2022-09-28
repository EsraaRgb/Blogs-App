import { Router } from "express";
import {auth} from '../../midlewares/auth.js'
import * as controller from './controller/user.js'
const router = Router()

router.all('/',auth())


router.get('/',controller.getAllUsers)
router.put('/',controller.updateUser)
router.delete('/',controller.deleteUser)



export default router
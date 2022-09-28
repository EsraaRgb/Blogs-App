import { Router } from "express";
import {auth} from '../../midlewares/auth.js'
import * as controller from './controller/blog.js'
const router = Router()

router.get('/',auth(),controller.getAllBlogs)
router.post('/',auth(),controller.addBlog)
router.put('/:id',auth(),controller.updateBlog)
router.delete('/:id',auth(),controller.deleteBlog)

export default router
import { Router } from "express";

import { createClaim, getClaim, getClaimByIdController, updateClaimController, deleteClaimController } from "../controllers/reclamo_controller.js";

const router = Router()

router.get('/claims',getClaim)
router.get('/claims/:id', getClaimByIdController)
router.post('/claims',createClaim)
router.put('/claims',updateClaimController)
router.delete('/claims/:id',deleteClaimController)




export default router


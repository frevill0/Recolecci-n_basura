import { Router } from "express";

import { getAllClaims, deleteClaim, createClaimModel, getClaimById, updateClaimModel } from "../controllers/reclamo_controller.js";

const router = Router()

router.get('/claims', getAllClaims)
router.get('/claims', createClaimModel)
router.get('/claims/:id', getClaimById)
router.get('/claims/:id', updateClaimModel)
router.get('/claims/:id', deleteClaim)

export default router


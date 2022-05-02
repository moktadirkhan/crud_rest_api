import express from "express";
import bookController from "../controller/book.controller";
const router = express.Router();
const base = "/api/v1/book";


router.post(base+"/create",bookController.createBook)

export default router;
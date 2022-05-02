import db from '../config/db.config'
import express, { Request, Response } from "express";

const Book = db.book;


  class bookController{
      async createBook(req:Request,res:Response){
          try {
            Book.create({
                name: req.body.name,
                price: req.body.price,
                language: req.body.language,
                total_pages: req.body.total_pages,
              }).then(() => {
                res.status(200).json({
                  status: true,
                  message: "Book created successfully",
                });
              });
            
          } catch (error) {
              
          }
      }
  }

  export default new bookController();
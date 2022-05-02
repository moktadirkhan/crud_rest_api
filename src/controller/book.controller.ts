import db from '../config/db.config'
import express, { Request, Response } from "express";
import Book from "../model/book.model";
// const Book = db.book;



class bookController{
      async createBook(req:Request,res:Response){
          try {
            const newBook = await Book.create({
                name: req.body.name,
                price: req.body.price,
                language: req.body.language,
                total_pages: req.body.total_pages,
              });
            if(newBook){
                res.json({
                    message: "Book created successfully",
                    book: newBook
                }); 
            }
          } catch (error) {
              console.log(error);
          }
      }
}

  export default new bookController();
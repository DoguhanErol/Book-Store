import axios from "axios";
import { apiUrlGetAllBooks, apiUrlGetBooksByCatagory, apiUrlPostOrder } from "./config";
import { TBook, TOrder } from "./types";

// GET All Books
export  const fetchAllBooks = async ()  => {
    console.log('Fetching All Books Data ...');
    const response = await axios.get<TBook[]>(apiUrlGetAllBooks);
    const books: TBook[] = response.data;
    console.log('All Books: ', books);
    return books
};

// GET Books By Catagory
export  const fetchBooksByCatagory = async (catagory: string)  => {
    console.log('Fetching Books By Catagory Data ...');
    const response = await axios.get<TBook[]>(apiUrlGetBooksByCatagory + catagory);
    const books: TBook[] = response.data;
    console.log('Catagory Books: ', books);
    return books
};

//POST Order
 export  const fetchPostMail = async (order:TOrder) => {
     console.log('Posting Order Data ...');
     const response = await axios.post<TOrder>(apiUrlPostOrder + order);
     return response.data
 };
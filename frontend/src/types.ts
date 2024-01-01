export type TBook ={
    id: number;
    title: string;
    author: string;
    publicationDate: string;
    price: number;
    category: string;
    imagePath: string;
}

export type TOrder  = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    orderDate: string;
    totalPrice: number;
    orderStatus: string;
  }

  export interface TOrderDetail {
    id: number;
    order: TOrder;
    book: TBook;
    quantity: number;
    totalPrice: number;
  }
export interface Transaction {
    _id?:string;
    type:"income" | "expense",
    category:string,
    amount:number,
    description:string,
    date:Date,
    userId:string,
    createdAt:Date,
    updatedAt:Date,
}

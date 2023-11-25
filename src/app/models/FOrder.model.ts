export interface FOrder{
    orderId:number,
    userId:number,
    userName:string,
    drugId: number,
    drugName:string,
    userEmail:string,
    price:number;
    quantity: number,
    totalPrice: number,
    orderDate:string,
    drugExp: number,
    isPicked:string
}
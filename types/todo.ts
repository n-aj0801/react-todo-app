import { UUID } from "crypto";

export type Todo = {
    id:number; 
    text:string; 
    completed:boolean;
    userId:UUID;
}
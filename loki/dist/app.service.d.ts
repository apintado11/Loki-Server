import { Transactions } from "./Schemas/transactions.schema";
import { Model } from "mongoose";
import * as mongoose from "mongoose";
export declare class AppService {
    private transactionModel;
    constructor(transactionModel: Model<Transactions>);
    findAll(): Promise<(mongoose.Document<unknown, {}, Transactions> & Omit<Transactions & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
    markTransactionCategory(id: any, body: any): Promise<string>;
    setTransactionClient(): Promise<string>;
    setTransactionClientTwo(): Promise<string>;
    getTotalsTwo(): Promise<any[]>;
    getTotals(): Promise<any[]>;
}

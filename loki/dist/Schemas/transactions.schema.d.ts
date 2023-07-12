/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument } from 'mongoose';
export type TransactionDocument = HydratedDocument<Transactions>;
export declare class Transactions {
    details: string;
    description: string;
    postingDate: Date;
    Amount: string;
    type: string;
    balance: string;
    checkOrSlip: string;
    taxCategory: string;
    client: string;
}
export declare const TransactionSchema: import("mongoose").Schema<Transactions, import("mongoose").Model<Transactions, any, any, any, import("mongoose").Document<unknown, any, Transactions> & Omit<Transactions & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Transactions, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Transactions>> & Omit<import("mongoose").FlatRecord<Transactions> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;

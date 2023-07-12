import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TransactionDocument = HydratedDocument<Transactions>;

@Schema()
export class Transactions {
    @Prop()
    details: string;

    @Prop()
    description: string;

    @Prop()
    postingDate: Date;

    @Prop()
    Amount: string;

    @Prop()
    type: string;

    @Prop()
    balance: string;

    @Prop()
    checkOrSlip: string;

    @Prop()
    taxCategory: string;

    @Prop()
    client: string


}

export const TransactionSchema = SchemaFactory.createForClass(Transactions);
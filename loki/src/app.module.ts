import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Transactions, TransactionSchema} from "./Schemas/transactions.schema";
import { AppointmentsModule } from './appointments/appointments.module';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://alexmpintado:!Talonisop2022!!@lokicluster.ebmecdm.mongodb.net/test?authMechanism=SCRAM-SHA-1'),
  MongooseModule.forFeature([{name: Transactions.name, schema: TransactionSchema}]),
  AppointmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

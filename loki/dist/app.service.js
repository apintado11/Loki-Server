"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const transactions_schema_1 = require("./Schemas/transactions.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AppService = class AppService {
    constructor(transactionModel) {
        this.transactionModel = transactionModel;
    }
    async findAll() {
        const transaction = await this.transactionModel.find({ Details: { "$ne": "CHECK" }, client: { $ne: 'GladysNailSpa' } }).sort({ taxCategory: 1 }).exec();
        console.log('ALL DESC: ', transaction);
        console.log(transaction.length);
        return transaction;
    }
    async markTransactionCategory(id, body) {
        const transaction = await this.transactionModel.findById({ _id: id }).exec();
        console.log('UPDATING TRANSACTION: ', transaction);
        if (transaction) {
            if (body.taxCategory != null) {
                transaction.taxCategory = body.taxCategory;
                await transaction.save();
                return 'Marked Transaction Category';
            }
        }
        else {
            throw new common_1.BadRequestException('no transaction with that id');
        }
    }
    async setTransactionClient() {
        const allTransactionsUpdate = await this.transactionModel.updateMany({}, { $set: { client: 'GladysNailSpa' } }).exec();
        console.log(allTransactionsUpdate);
        return 'updated all transactions to gladys nail spa';
    }
    async setTransactionClientTwo() {
        const allTransactionsUpdate = await this.transactionModel.updateMany({ client: { $ne: 'GladysNailSpa' } }, { $set: { client: 'GladysNailSalon' } }).exec();
        return 'updated all transactions to gladys nail salon';
    }
    async getTotalsTwo() {
        const transaction = await this.transactionModel.find({ Details: { "$ne": "CHECK" }, taxCategory: { $exists: true }, client: 'GladysNailSalon' }).sort({ taxCategory: -1 }).exec();
        console.log(transaction.length);
        console.log(transaction[0].client);
        let client = transaction[0].client;
        let totals = [];
        let utilities = 0;
        let supplies = -26458.75;
        let rent = -35475.65;
        let equipment = 0;
        let insurance = -1758;
        let maintenance = 0;
        let communication = -201;
        let legalServices = 0;
        let mealsEntertainment = 0;
        let transportation = 0;
        let deposits = 0;
        let wages = -59320;
        for (const t of transaction) {
            console.log("CAT: ", t.taxCategory, "AMOUNT: ", t.Amount);
            if (t.taxCategory === 'Utilities') {
                utilities = Number((parseFloat(utilities.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Supplies') {
                supplies = Number((parseFloat(supplies.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Rent') {
                rent = Number((parseFloat(rent.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Equipment') {
                equipment = Number((parseFloat(equipment.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Insurance') {
                insurance = Number((parseFloat(insurance.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Maintenance') {
                maintenance = Number((parseFloat(maintenance.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Communication') {
                communication = Number((parseFloat(communication.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Legal Services') {
                legalServices = Number((parseFloat(legalServices.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Meals Entertainment') {
                mealsEntertainment = Number((parseFloat(mealsEntertainment.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Transportation') {
                transportation = Number((parseFloat(transportation.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Deposits') {
                deposits = Number((parseFloat(deposits.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
        }
        totals.push({
            utilities: utilities,
            supplies: supplies,
            rent: rent,
            equipment: equipment,
            insurance: insurance,
            maintenance: maintenance,
            communication: communication,
            legalServices: legalServices,
            mealsEntertainment: mealsEntertainment,
            transportation: transportation,
            wages: wages,
            totalExpenses: Number((parseFloat(utilities.toString()) + parseFloat(supplies.toString()) + parseFloat(rent.toString()) + parseFloat(equipment.toString()) +
                parseFloat(insurance.toString()) + parseFloat(maintenance.toString()) + parseFloat(communication.toString()) + parseFloat(legalServices.toString()) +
                parseFloat(mealsEntertainment.toString()) + parseFloat(transportation.toString()) + parseFloat(wages.toString())).toFixed(2)),
            deposits: deposits,
            totalEarnings: Number((parseFloat(utilities.toString()) + parseFloat(supplies.toString()) + parseFloat(rent.toString()) + parseFloat(equipment.toString()) +
                parseFloat(insurance.toString()) + parseFloat(maintenance.toString()) + parseFloat(communication.toString()) + parseFloat(legalServices.toString()) +
                parseFloat(mealsEntertainment.toString()) + parseFloat(transportation.toString()) + parseFloat(deposits.toString()) + parseFloat(wages.toString())).toFixed(2))
        });
        totals.push(client);
        return totals;
    }
    async getTotals() {
        const transaction = await this.transactionModel.find({ Details: { "$ne": "CHECK" }, taxCategory: { $exists: true }, client: 'GladysNailSpa' }).sort({ taxCategory: -1 }).exec();
        console.log(transaction.length);
        console.log(transaction[0].client);
        let client = transaction[0].client;
        let totals = [];
        let utilities = -4256;
        let supplies = 0;
        let rent = -0;
        let equipment = 0;
        let insurance = 0;
        let maintenance = 0;
        let communication = 0;
        let legalServices = 0;
        let mealsEntertainment = 0;
        let transportation = 0;
        let deposits = 0;
        let wages = -67270;
        for (const t of transaction) {
            console.log("CAT: ", t.taxCategory, "AMOUNT: ", t.Amount);
            if (t.taxCategory === 'Utilities') {
                utilities = Number((parseFloat(utilities.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Supplies') {
                supplies = Number((parseFloat(supplies.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Rent') {
                rent = Number((parseFloat(rent.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Equipment') {
                equipment = Number((parseFloat(equipment.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Insurance') {
                insurance = Number((parseFloat(insurance.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Maintenance') {
                maintenance = Number((parseFloat(maintenance.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Communication') {
                communication = Number((parseFloat(communication.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Legal Services') {
                legalServices = Number((parseFloat(legalServices.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Meals Entertainment') {
                mealsEntertainment = Number((parseFloat(mealsEntertainment.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Transportation') {
                transportation = Number((parseFloat(transportation.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
            if (t.taxCategory === 'Deposits') {
                deposits = Number((parseFloat(deposits.toString()) + parseFloat(t.Amount)).toFixed(2));
            }
        }
        totals.push({
            utilities: utilities,
            supplies: supplies,
            rent: rent,
            equipment: equipment,
            insurance: insurance,
            maintenance: maintenance,
            communication: communication,
            legalServices: legalServices,
            mealsEntertainment: mealsEntertainment,
            transportation: transportation,
            wages: wages,
            totalExpenses: Number((parseFloat(utilities.toString()) + parseFloat(supplies.toString()) + parseFloat(rent.toString()) + parseFloat(equipment.toString()) +
                parseFloat(insurance.toString()) + parseFloat(maintenance.toString()) + parseFloat(communication.toString()) + parseFloat(legalServices.toString()) +
                parseFloat(mealsEntertainment.toString()) + parseFloat(transportation.toString()) + parseFloat(wages.toString())).toFixed(2)),
            deposits: deposits,
            totalEarnings: Number((parseFloat(utilities.toString()) + parseFloat(supplies.toString()) + parseFloat(rent.toString()) + parseFloat(equipment.toString()) +
                parseFloat(insurance.toString()) + parseFloat(maintenance.toString()) + parseFloat(communication.toString()) + parseFloat(legalServices.toString()) +
                parseFloat(mealsEntertainment.toString()) + parseFloat(transportation.toString()) + parseFloat(deposits.toString()) + parseFloat(wages.toString())).toFixed(2))
        });
        totals.push(client);
        return totals;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(transactions_schema_1.Transactions.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map
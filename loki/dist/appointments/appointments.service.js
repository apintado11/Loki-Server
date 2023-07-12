"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsService = void 0;
const common_1 = require("@nestjs/common");
let AppointmentsService = class AppointmentsService {
    create(createAppointmentDto) {
        return 'This action adds a new appointment';
    }
    findAll() {
        return `This action returns all appointments`;
    }
    findOne(id) {
        return `YO WERE IN BUSINESS`;
    }
    update(id, updateAppointmentDto) {
        return `This action updates a #${id} appointment`;
    }
    remove(id) {
        return `This action removes a #${id} appointment`;
    }
};
AppointmentsService = __decorate([
    (0, common_1.Injectable)()
], AppointmentsService);
exports.AppointmentsService = AppointmentsService;
//# sourceMappingURL=appointments.service.js.map
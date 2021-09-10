"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimasClientExceptionFilter = void 0;
const client_1 = require(".prisma/client");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
let PrimasClientExceptionFilter = class PrimasClientExceptionFilter extends core_1.BaseExceptionFilter {
    catch(exception, host) {
        super.catch(exception, host);
    }
};
PrimasClientExceptionFilter = __decorate([
    (0, common_1.Catch)(client_1.Prisma.PrismaClientKnownRequestError)
], PrimasClientExceptionFilter);
exports.PrimasClientExceptionFilter = PrimasClientExceptionFilter;
//# sourceMappingURL=prisma.filter.js.map
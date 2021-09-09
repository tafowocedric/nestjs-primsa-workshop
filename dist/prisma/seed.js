"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const products_1 = require("../products");
const prisma = new client_1.PrismaClient();
async function main() {
    for (const product of products_1.products) {
        await prisma.product.create({ data: product });
    }
}
main()
    .catch((error) => {
    console.log(error);
    process.exit(1);
})
    .finally(async () => await prisma.$disconnect());
//# sourceMappingURL=seed.js.map
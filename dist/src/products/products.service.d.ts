import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Prisma } from '.prisma/client';
import { ConnectionArgsDto } from 'src/page/connection-args.dto';
import { ProductEntity } from './entities/product.entity';
import { Page } from 'src/page/page.dto';
export declare class ProductsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findPage(connectionArgs: ConnectionArgsDto): Promise<Page<ProductEntity>>;
    findDrafts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: string): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    update(id: string, updateProductDto: UpdateProductDto): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    remove(id: string): Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}

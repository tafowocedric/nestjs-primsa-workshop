import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Prisma } from '.prisma/client';
import { ConnectionArgsDto } from 'src/page/connection-args.dto';
import { ProductEntity } from './entities/product.entity';
import { Page } from 'src/page/page.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductDto: CreateProductDto) {
    return this.prisma.product.create({ data: createProductDto });
  }

  findAll() {
    return this.prisma.product.findMany({ where: { published: true } });
  }

  async findPage(connectionArgs: ConnectionArgsDto) {
    const where: Prisma.ProductWhereInput = { published: true };

    const page = await findManyCursorConnection(
      (args) => {
        console.log(args);
        return this.prisma.product.findMany({ ...args, where: where });
      },
      () => this.prisma.product.count({ where: where }),
      connectionArgs,
      {
        recordToEdge: (record) => ({
          node: new ProductEntity(record),
        }),
      },
    );

    return new Page<ProductEntity>(page);
  }

  findDrafts() {
    return this.prisma.product.findMany({ where: { published: false } });
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id: id } });
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id: id },
      data: updateProductDto,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id: id } });
  }
}

import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    findAll(): Promise<ProductEntity[]>;
    findDrafts(): Promise<ProductEntity[]>;
    findOne(id: string): Promise<ProductEntity>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    remove(id: string): Promise<ProductEntity>;
}

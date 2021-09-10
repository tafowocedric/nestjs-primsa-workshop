import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ConnectionArgsDto } from 'src/page/connection-args.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<ProductEntity>;
    findAll(): Promise<ProductEntity[]>;
    findPage(connectionArgs: ConnectionArgsDto): Promise<import("../page/page.dto").Page<ProductEntity>>;
    findDrafts(): Promise<ProductEntity[]>;
    findOne(id: string): Promise<ProductEntity>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    remove(id: string): Promise<ProductEntity>;
}

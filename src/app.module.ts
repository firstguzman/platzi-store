import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CostumersController } from './controllers/costumers.controller';
import { BrandsController } from './controllers/brands.controller';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';
import { OrdersService } from './services/orders.service';
import { CostumersService } from './services/costumers.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    OrdersController,
    UsersController,
    CostumersController,
    BrandsController,
  ],
  providers: [
    AppService,
    ProductsService,
    UsersService,
    OrdersService,
    CostumersService,
    CategoriesService,
    BrandsService,
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ProductsModule } from 'src/products/products.module';
import { CustomersController } from './controllers/customers.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersService } from './services/customers.service';
import { OrdersService } from './services/orders.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [ProductsModule],
  controllers: [OrdersController, UsersController, CustomersController],
  providers: [OrdersService, UsersService, CustomersService],
})
export class UsersModule {}

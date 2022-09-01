import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dto';
import { Order } from '../entities/order.entity';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private productsService: ProductsService,
  ) {}

  findAll() {
    return this.userModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  create(data: CreateUserDto) {
    const newUser = new this.userModel(data);
    return newUser.save();
  }

  update(id: string, changes: UpdateUserDto) {
    const user = this.userModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }
    return user;
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  async getOrderByUser(id: string) {
    console.log('here');
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: await this.productsService.findAll(),
    };
  }
}

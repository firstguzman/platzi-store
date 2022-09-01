import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto, UpdateBrandDto } from '../dtos/brands.dto';
import { Brand } from '../entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  findAll() {
    return this.brandModel.find().exec();
  }

  findOne(id: string) {
    const product = this.brandModel.findById(id).exec();
    if (!product) {
      throw new NotFoundException(`Brand #${id} not found`);
    }
    return product;
  }

  create(data: CreateBrandDto) {
    const newBrand = new this.brandModel(data);
    return newBrand.save();
  }

  update(id: string, changes: UpdateBrandDto) {
    const brand = this.brandModel
      .findByIdAndUpdate(id, { $set: changes }, { new: true })
      .exec();
    if (!brand) {
      throw new NotFoundException(`Brand ${id} not found`);
    }
    return brand;
  }

  remove(id: string) {
    return this.brandModel.findByIdAndDelete(id);
  }
}

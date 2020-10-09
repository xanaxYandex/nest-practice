import { Injectable } from '@nestjs/common';
import { createUserDto, updateUserDto, User, UserDocument } from '../../models/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    public get(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    public async getById(id: string): Promise<User> {
        return this.userModel.findById(id).exec();
    }

    public async create(userDto: createUserDto): Promise<User> {
        const user = new this.userModel(userDto);
        return user.save();
    }

    public async update(id: string, userDto: updateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, userDto, {new: true});
    }

    public async delete(id: string): Promise<any> {
        return this.userModel.findByIdAndDelete(id);
    }
}

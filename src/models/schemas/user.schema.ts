import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop({
        type: String,
        required: true,
        unique: true
    }) email: string;

    @Prop({
        type: String,
        required: true
    }) name: string;

    @Prop({
        type: String,
        required: true
    }) role: string;
}

export class createUserDto {
    email: string;
    name: string;
    role: string;
}

export class updateUserDto {
    email: string;
    name: string;
    role: string;
}

export const UserSchema: mongoose.Schema<UserDocument> = SchemaFactory.createForClass(User);

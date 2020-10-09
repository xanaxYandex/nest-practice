import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { UserService } from '../../services/user/user.service';
import { createUserDto, updateUserDto, User } from 'src/models/schemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get()
    public getAllUsers(): Promise<User[]> {
        return this.userService.get();
    }

    @Get(':id')
    public getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getById(id);
    }

    @Post()
    public createUser(@Body() user: createUserDto): Promise<User> {
        return this.userService.create(user);
    }

    @Put(':id')
    public updateUser(@Param('id') id: string, @Body() user: updateUserDto): Promise<User> {
        return this.userService.update(id, user);
    }

    @Delete(':id')
    public deleteUser(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}

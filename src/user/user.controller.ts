import { Body, Controller, Post } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    login(@Body() user: User) {
        return this.userService.login(user);
    }
}

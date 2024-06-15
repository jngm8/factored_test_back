import { Controller, Post } from '@nestjs/common';
import { User } from './user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService
    ){}

    @Post()
    login(user: User) {
        this.userService.login(user);
    }
}

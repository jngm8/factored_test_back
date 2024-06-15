import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}

    async create(user: Partial<User>): Promise<User> {
        const newUser = this.userRepository.create(user);
        return this.userRepository.save(newUser);
      }
    
      async findAll(): Promise<User[]> {
        return this.userRepository.find();
      }



    async login(user: User) {

      const {username, password} = user;

      const checkUser =  await this.userRepository.findOne({where:{username}});      

      if((checkUser) && password === checkUser.password){
        return {username,password, id: checkUser.id, name: checkUser.name, position: checkUser.position}
      } else {
        throw new UnauthorizedException("Please check your credentials")
      }
    }
}

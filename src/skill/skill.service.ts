import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Skill } from './skill';
import { Repository } from 'typeorm';
import { User } from '../user/user';

@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(Skill)
        private readonly skillRepository: Repository<Skill>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){}


    async addSkill(skill: Partial<Skill>){
        await this.skillRepository.save(skill)
    }

    async findAll(){
        await this.skillRepository.find();
    }

    async getSkillsFromUser(id:string){

        const user = await this.userRepository.findOne({where:{id}})

        const skills = await this.skillRepository.find({where:{user}})
        
        
        return skills
    }

}

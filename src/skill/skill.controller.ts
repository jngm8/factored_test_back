import { Controller, Get, Param } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('skill')
export class SkillController {
    constructor(
        private readonly skillService: SkillService
    ){}

    @Get(':idUser')
    async getSkillsFromUser(@Param('idUser') idUser:string){
       return await this.skillService.getSkillsFromUser(idUser)
    }
}

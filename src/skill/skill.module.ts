import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './skill';
import { SkillService } from './skill.service';
import { SkillController } from './skill.controller';
import { User } from '../user/user';

@Module({
    imports: [TypeOrmModule.forFeature([Skill,User])],
    providers: [SkillService],
    exports:[SkillService,TypeOrmModule,SkillModule],
    controllers: [SkillController]
})
export class SkillModule {}

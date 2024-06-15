import { Module, OnModuleInit } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user';
import { SkillService } from '../skill/skill.service';
import { SkillModule } from 'src/skill/skill.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]),SkillModule],
  providers: [UserService,SkillService],
  controllers: [UserController],
  exports: [UserService,UserModule,TypeOrmModule]
})

export class UserModule implements OnModuleInit {
  constructor(
    private readonly userService: UserService,
    private readonly skillService: SkillService
  ) {}

  async onModuleInit() {
    const users = await this.userService.findAll();
    const setOfSkills = ["Python","SQL","Java","Spark","TensorFlow"]
    if (users.length === 0) {
      const user1 = await this.userService.create({ username: 'Jairo', password: 'factored123', name: 'Jairo Gomez', position: 'AI Developer' });
      const user2 =await this.userService.create({ username: 'Maria', password: 'factored321', name: 'Maria Becerra', position: 'WEB Developer' });
      const user3 =await this.userService.create({ username: 'Pedro', password: 'factored543', name: 'Pedro Capote ', position: 'Mobile Developer' });
      const user4 =await this.userService.create({ username: 'Juan', password: 'factored786', name: 'Juan Lillo', position: 'Data Engineer' });

      for (let i = 0; i < setOfSkills.length; i++){
        this.skillService.addSkill({
          skill: setOfSkills[i],
          user: user1,
          score: Math.floor(Math.random() * (10 - 1 + 1)) + 1
      })
      }
      for (let i = 0; i < setOfSkills.length; i++){
        this.skillService.addSkill({
          skill: setOfSkills[i],
          user: user2,
          score: Math.floor(Math.random() * (10 - 1 + 1)) + 1
      })
      }
      for (let i = 0; i < setOfSkills.length; i++){
        this.skillService.addSkill({
          skill: setOfSkills[i],
          user: user3,
          score: Math.floor(Math.random() * (10 - 1 + 1)) + 1
      })
      }
      for (let i = 0; i < setOfSkills.length; i++){
        this.skillService.addSkill({
          skill: setOfSkills[i],
          user: user4,
          score: Math.floor(Math.random() * (10 - 1 + 1)) + 1
      })
      }

    }
  }
}

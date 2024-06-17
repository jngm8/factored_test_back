import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillModule } from './skill/skill.module';
import { User } from './user/user';
import { Skill } from './skill/skill';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres_db', 
      // host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'factored',
      entities: [User,Skill],
      synchronize: true
    }),
    UserModule,
    SkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

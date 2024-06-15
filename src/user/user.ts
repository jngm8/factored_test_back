import { Skill } from "../skill/skill";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column()
    position: string;

    @OneToMany(() => Skill , (skill) => skill.user)
    skills: Skill[];

}

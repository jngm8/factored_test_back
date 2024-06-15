import { User } from "../user/user";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Skill {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    skill: string

    @Column()
    score: number

    @ManyToOne(() => User, (user) => user.skills)
    user: User;

}

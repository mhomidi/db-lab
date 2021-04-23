import { BaseEntity, Column, Entity, JoinTable, ManyToMany } from "typeorm";
import AbilityEntity from "./ability.entity";


@Entity()
export default class FreelancerEntity extends BaseEntity
{
    @Column({ length: 50 })
    email: string;

    @Column({ length: 50 })
    university: string;

    @Column({ length: 50 })
    resumeUrl: string;

    @Column()
    point: number;

    @Column({ length: 200 })
    descrption: string;

    @ManyToMany(type => AbilityEntity)
    @JoinTable()
    ablities: AbilityEntity[];
}

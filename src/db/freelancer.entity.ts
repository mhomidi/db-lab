import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import AbilityEntity from "./ability.entity";


@Entity()
export default class FreelancerEntity extends BaseEntity
{
    @PrimaryColumn({ length: 50 })
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

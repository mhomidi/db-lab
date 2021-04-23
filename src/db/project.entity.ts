import { BaseEntity, Column, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import AbilityEntity from "./ability.entity";
import FreelancerEntity from "./freelancer.entity";
import UserEntity from "./user.entity";

export default class ProjectEntity extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne( () => UserEntity)
    user: UserEntity;

    @Column()
    minOffer: number;

    @Column()
    maxOffer: number;

    @OneToOne( () => FreelancerEntity)
    @Column({ nullable: true})
    freelancer: FreelancerEntity;

    @Column()
    deadline: Date;

    @Column()
    active: boolean;

    @Column()
    seen: number;

    @Column()
    type: number;

    @Column()
    createdAt: Date;

    @ManyToMany(type => AbilityEntity)
    @JoinTable()
    ablities: AbilityEntity[];
}

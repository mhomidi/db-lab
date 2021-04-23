import { BaseEntity, Column, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import FreelancerEntity from "./freelancer.entity";
import ProjectEntity from "./project.entity";

export default class OfferEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne( () => FreelancerEntity)
    @JoinColumn()
    freelancer: FreelancerEntity;

    @OneToOne( () => ProjectEntity)
    @JoinColumn()
    project: ProjectEntity;

    @Column()
    cost: number;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}

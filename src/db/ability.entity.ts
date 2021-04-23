import { BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";


export default class AbilityEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50 })
    title: string;
    
    @Column()
    categoryId: number;
}

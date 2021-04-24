import { Injectable } from '@nestjs/common';
import CreateFreelancerDto from './dto/freelancer.dto';
import CreateProjectDto from './dto/project.dto';
import CreateOfferDto from './dto/offer.dto'
import CreateAbilityDto from './dto/ability.dto'
import FreelancerEntity from 'src/db/freelancer.entity';
import AbilityEntity from 'src/db/ability.entity';
import ProjectEntity from 'src/db/project.entity';
import UserEntity from 'src/db/user.entity';
import OfferEntity from 'src/db/offer.entity';

@Injectable()
export class JobseekersService {

    async insertFreelancer(freelancerData: CreateFreelancerDto) {
        const freelancer = FreelancerEntity.create();
        const { freelancerEmail, university, resumeUrl, point, description, abilities} = freelancerData;

        freelancer.email = freelancerEmail;
        freelancer.university = university;
        freelancer.resumeUrl = resumeUrl;
        freelancer.point = point;
        freelancer.descrption = description;
        for (let index = 0; index < abilities.length; index++) {
            const abilityId = abilities[index];
            const ability = await AbilityEntity.findOne(abilityId);
            freelancer.ablities.push(ability);
        }
        freelancer.save();
        return freelancer;
    }

    async getAllFreelancer() {
        return FreelancerEntity.find();
    }

    async insertProject(projectData: CreateProjectDto) {
        const {
            employerEmail,
            minOffer,
            maxOffer,
            freelancerEmail,
            deadline,
            active,
            type,
            abilities
        } = projectData;

        const project = ProjectEntity.create();
        
        project.user = await UserEntity.findOne(employerEmail);
        project.minOffer = minOffer;
        project.maxOffer = maxOffer;
        project.freelancer = await FreelancerEntity.findOne(freelancerEmail);
        project.deadline = deadline;
        project.active = active;
        project.type = type;

        for (let index = 0; index < abilities.length; index++) {
            const abilityId = abilities[index];
            const ability = await AbilityEntity.findOne(abilityId);
            project.ablities.push(ability);
        }

        project.save();
        return project;
    }

    async getAllProjects() {
        return ProjectEntity.find();
    }

    async insertOffer(offerData: CreateOfferDto) {
        const {
            freelancerEmail,
            projectId,
            cost,
            createdAt,
            updatedAt
        } = offerData;

        const offer = OfferEntity.create();

        offer.freelancer = await FreelancerEntity.findOne(freelancerEmail);
        offer.project = await ProjectEntity.findOne(projectId);
        offer.cost = cost;
        offer.createdAt = createdAt;
        offer.updatedAt = updatedAt;
        offer.save();

        return offer;
    }

    async getAllOffer() {
        return OfferEntity.find();
    }

    async insertAbility(abilityData: CreateAbilityDto) {
        const {
            title,
            categoryId,
        } = abilityData

        const ability = AbilityEntity.create();
        ability.title = title;
        ability.categoryId = categoryId;
        ability.save();
        return ability;
    }

    async getAllAbilities() {
        return AbilityEntity.find();
    }
}

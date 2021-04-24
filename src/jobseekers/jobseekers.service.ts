import { Injectable } from '@nestjs/common';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateProjectDto from './dto/create-project.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateAbilityDto from './dto/create-ability.dto';
import FreelancerEntity from 'src/db/freelancer.entity';
import AbilityEntity from 'src/db/ability.entity';
import ProjectEntity from 'src/db/project.entity';
import UserEntity from 'src/db/user.entity';
import OfferEntity from 'src/db/offer.entity';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateProjectDto from './dto/update-project.dto';
import UpdateOfferDto from './dto/update-offer.dto';
import UpdateAbilityDto from './dto/update-ability.dto';

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

    async deleteFreelancer(email: string) {
        const freelancer = FreelancerEntity.findOne(email);
        (await freelancer).remove();

        return freelancer;
    }

    async updateFreelancer(data: UpdateFreelancerDto) {
        const {freelancerEmail, university, resumeUrl, point, description, abilities} = data;

        const freelancer = FreelancerEntity.findOne(freelancerEmail);
        if (university)
            (await freelancer).university = university;
        if (resumeUrl)
            (await freelancer).resumeUrl = resumeUrl;
        if (point)
            (await freelancer).point = point;
        if (description)
            (await freelancer).descrption = description;
        if (abilities) {
            for (let index = 0; index < abilities.length; index++) {
                const abilityId = abilities[index];
                const ability = await AbilityEntity.findOne(abilityId);
                (await freelancer).ablities.push(ability);
            }
        }
        (await freelancer).save();

        return freelancer;

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

    async deleteProject(projectId: string) {
        const project = ProjectEntity.findOne(projectId);
        (await project).remove();

        return project;
    }

    async updateProject(updateProjectData: UpdateProjectDto) {
        const {
            id,
            employerEmail,
            minOffer,
            maxOffer,
            freelancerEmail,
            deadline,
            active,
            type,
            abilities
        } = updateProjectData;

        const project = ProjectEntity.findOne(id);
        
        (await project).user = await UserEntity.findOne(employerEmail);
        (await project).minOffer = minOffer ? minOffer : (await project).minOffer;
        (await project).maxOffer = maxOffer ? maxOffer : (await project).maxOffer;
        (await project).freelancer = freelancerEmail ? await FreelancerEntity.findOne(freelancerEmail) : (await project).freelancer;
        (await project).deadline = deadline ? deadline : (await project).deadline;
        (await project).active = active != null ? active : (await project).active;
        (await project).type = type ? type : (await project).type;

        if (abilities) {
            for (let index = 0; index < abilities.length; index++) {
                const abilityId = abilities[index];
                const ability = await AbilityEntity.findOne(abilityId);
                (await project).ablities.push(ability);
            }
        }
        (await project).save();

        return project;
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

    async deleteOffer(offerId: string) {
        const offer = OfferEntity.findOne(offerId);
        (await offer).remove();

        return offer;
    }

    async updateOffer(offerData: UpdateOfferDto) {
        const {
            id,
            freelancerEmail,
            projectId,
            cost,
            createdAt,
            updatedAt
        } = offerData;

        const offer = OfferEntity.findOne(id);

        (await offer).freelancer = freelancerEmail ? await FreelancerEntity.findOne(freelancerEmail) : (await offer).freelancer;
        (await offer).project = projectId ? await ProjectEntity.findOne(projectId): (await offer).project;
        (await offer).cost = cost ? cost : (await offer).cost;
        (await offer).createdAt = createdAt ? createdAt : (await offer).createdAt;
        (await offer).updatedAt = updatedAt ? updatedAt : (await offer).updatedAt;
        (await offer).save();

        return offer;
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

    async deleteAbility(abilityId: string) {
        const ability = AbilityEntity.findOne(abilityId);
        (await ability).remove();

        return ability;
    }

    async updateAbility(abilityData: UpdateAbilityDto) {
        const {
            id,
            title,
            categoryId,
        } = abilityData

        const ability = AbilityEntity.findOne(id);
        (await ability).title = title ? title : (await ability).title;
        (await ability).categoryId = categoryId ? categoryId : (await ability).categoryId;
        (await ability).save();
        
        return ability;
    }
}

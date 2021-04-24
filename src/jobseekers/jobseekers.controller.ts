import { Body, Controller, Delete, Get, Header, Post, Put, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import CraeteAbilityDto from './dto/create-ability.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOfferDto from './dto/create-offer.dto';
import CreateProjectDto from './dto/create-project.dto';
import UpdateAbilityDto from './dto/update-ability.dto';
import UpdateFreelancerDto from './dto/update-freelancer.dto';
import UpdateOfferDto from './dto/update-offer.dto';
import UpdateProjectDto from './dto/update-project.dto';
import { JobseekersService } from './jobseekers.service';

@Controller('jobseekers')
export class JobseekersController {

    constructor(private readonly jobseekersService: JobseekersService) {}

    @Post('create/freelancer')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Create freelancer' })
    @ApiQuery({
        name: 'freelancerEmail',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'university',
        type: String
    })
    @ApiQuery({
        name: 'resumeUrl',
        type: String
    })
    @ApiQuery({
        name: 'point',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'description',
        type: String
    })
    @ApiQuery({
        name: 'abilities',
        type: Array
    })
    async createFreelancer( @Body() freelancer: CreateFreelancerDto)
    {
        return this.jobseekersService.insertFreelancer(freelancer);
    }

    @Put('update/freelancer')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Update freelancer' })
    @ApiQuery({
        name: 'freelancerEmail',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'university',
        type: String
    })
    @ApiQuery({
        name: 'resumeUrl',
        type: String
    })
    @ApiQuery({
        name: 'point',
        type: Number
    })
    @ApiQuery({
        name: 'description',
        type: String
    })
    @ApiQuery({
        name: 'abilities',
        type: Array
    })
    async updateFreelancer( @Body() freelancer: UpdateFreelancerDto)
    {
        return this.jobseekersService.insertFreelancer(freelancer);
    }

    @Delete('delete/freelancer')
    @ApiResponse({ status: 200, description: 'Delete freelancer' })
    async deleteFreelancer(@Query('id') id)
    {
        return this.jobseekersService.deleteFreelancer(id);
    }

    @Get('get/freelancer')
    @ApiResponse({ status: 200, description: 'Get all freelancer' })
    async getFreelancers()
    {
        return this.jobseekersService.getAllFreelancer();
    }

    @Post('create/project')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Create project' })
    @ApiQuery({
        name: 'employerEmail',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'minOffer',
        type: Number
    })
    @ApiQuery({
        name: 'maxOffer',
        type: Number
    })
    @ApiQuery({
        name: 'freelancerEmail',
        type: String
    })
    @ApiQuery({
        name: 'deadline',
        type: Date
    })
    @ApiQuery({
        name: 'active',
        required: true,
        type: Boolean
    })
    @ApiQuery({
        name: 'type',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'abilities',
        required: true,
        type: Array
    })
    async createProject(@Body() project: CreateProjectDto)
    {
        return this.createProject(project);
    }

    @Put('update/project')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Update project' })
    @ApiQuery({
        name: 'id',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'employerEmail',
        type: String
    })
    @ApiQuery({
        name: 'minOffer',
        type: Number
    })
    @ApiQuery({
        name: 'maxOffer',
        type: Number
    })
    @ApiQuery({
        name: 'freelancerEmail',
        type: String
    })
    @ApiQuery({
        name: 'deadline',
        type: Date
    })
    @ApiQuery({
        name: 'active',
        type: Boolean
    })
    @ApiQuery({
        name: 'type',
        type: Number
    })
    @ApiQuery({
        name: 'abilities',
        type: Array
    })
    async updateProject(@Body() project: UpdateProjectDto)
    {
        return this.updateProject(project);
    }

    @Delete('delete/project')
    @ApiResponse({ status: 200, description: 'Delete project' })
    async deleteProject(@Query('id') id)
    {
        return this.jobseekersService.deleteProject(id);
    }

    @Get('get/project')
    @ApiResponse({ status: 200, description: 'Get all project' })
    async getProjects()
    {
        return this.jobseekersService.getAllProjects();
    }

    @Post('create/offer')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Create offer' })
    @ApiQuery({
        name: 'freelancerEmail',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'projectId',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'cost',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'createdAt',
        required: true,
        type: Date
    })
    @ApiQuery({
        name: 'updatedAt',
        required: true,
        type: Date
    })
    async createOffer(@Body() offer: CreateOfferDto)
    {
        return this.jobseekersService.insertOffer(offer);
    }

    @Put('update/offer')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Create offer' })
    @ApiQuery({
        name: 'id',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'freelancerEmail',
        type: String
    })
    @ApiQuery({
        name: 'projectId',
        type: Number
    })
    @ApiQuery({
        name: 'cost',
        type: Number
    })
    @ApiQuery({
        name: 'createdAt',
        type: Date
    })
    @ApiQuery({
        name: 'updatedAt',
        type: Date
    })
    async updateOffer(@Body() offer: UpdateOfferDto)
    {
        return this.jobseekersService.updateOffer(offer);
    }

    @Delete('delete/offer')
    @ApiResponse({ status: 200, description: 'Delete offer' })
    async deleteOffer(@Query('id') id)
    {
        return this.jobseekersService.deleteOffer(id);
    }

    @Get('get/offer')
    @ApiResponse({ status: 200, description: 'Get all offers' })
    async getOffers()
    {
        return this.jobseekersService.getAllOffer();
    }

    @Post('create/ability')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Create ability' })
    @ApiQuery({
        name: 'title',
        required: true,
        type: String
    })
    @ApiQuery({
        name: 'categoryId',
        required: true,
        type: Number
    })
    async createAbility(@Body() ability: CraeteAbilityDto)
    {
        return this.jobseekersService.insertAbility(ability);
    }

    @Put('update/ability')
    @Header('Content-Type', 'application/json')
    @ApiResponse({ status: 200, description: 'Create ability' })
    @ApiQuery({
        name: 'id',
        required: true,
        type: Number
    })
    @ApiQuery({
        name: 'title',
        type: String
    })
    @ApiQuery({
        name: 'categoryId',
        type: Number
    })
    async updateAbility(@Body() ability: UpdateAbilityDto)
    {
        return this.jobseekersService.updateAbility(ability);
    }

    @Delete('delete/ability')
    @ApiResponse({ status: 200, description: 'Delete ability' })
    async deleteAbility(@Query('id') id)
    {
        return this.jobseekersService.deleteAbility(id);
    }

    @Get('get/ability')
    @ApiResponse({ status: 200, description: 'Get all abilities' })
    async getAbilities()
    {
        return this.jobseekersService.getAllAbilities();
    }
}

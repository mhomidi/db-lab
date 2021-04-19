import { Controller, Post, Body, Get, Header, Query  } from '@nestjs/common';
import { PersonDto } from './dto/dto.person';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {

    constructor(
        private readonly helloService: HelloService
    ) {}

    @Post('welcome')
    @Header('Content-Type', 'application/json')
    async sayWelcome (@Body() personDto: PersonDto): Promise<{data : String}>
    {
        let msg = await this.helloService.welcome(personDto);
        return  {data : msg};
    }

    @Get('welcome')
    async sayWelcome2 (@Query('name') iName, @Query('year') iYear): Promise<{data : String}>
    {
        let msg = await this.helloService.welcome({name: iName, year: iYear});
        return  {data : msg};
    }

}

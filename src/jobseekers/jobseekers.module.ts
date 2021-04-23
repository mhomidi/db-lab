import { Module } from '@nestjs/common';
import { JobseekersController } from './jobseekers.controller';
import { JobseekersService } from './jobseekers.service';

@Module({
  controllers: [JobseekersController],
  providers: [JobseekersService]
})
export class JobseekersModule {}

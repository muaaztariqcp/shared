import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [],
  providers: [DbService, UserRepository],
  exports: [DbService, UserRepository]
})
export class DbModule {}

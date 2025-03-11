import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  public async verifyUser(user: string): Promise<boolean> {
    console.log('Verifying user...');
    console.log('User: ', user);
    return true;
  }
}

import { Injectable } from '@nestjs/common';
import { User } from '../../models/user/user.model.js'

@Injectable()
export class UserService {
    async createUser(userData){
        return User.create(userData);
    }
    
    async findAllUsers() {
        return User.findAll();
      }
}


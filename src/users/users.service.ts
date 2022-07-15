import { Injectable, NotFoundException } from "@nestjs/common";

import { User } from './users.model';

@Injectable()
export class UsersService{
    private users: User[] = [];

    signupUser(name: string){

    }

    insertUser(name: string, password: string, hospitalCode: string){
        const email = 'dasayan348@gmail.com';
        const newUser = new User(email, name, password, hospitalCode);
        this.users.push(newUser);
        return email;
    }

    getUsers(){
        return [...this.users];
    }

    getUser(email: string){
        const [_, user] = this.findUser(email);
        return { user };
    }

    private findUser(email: string): [User, number] {
        const userIndex = this.users.findIndex(prod => prod.email === email);
        const user = this.users[userIndex];
        if (!user) {
          throw new NotFoundException('Could not find user.');
        }
        return [user, userIndex];
      }

}
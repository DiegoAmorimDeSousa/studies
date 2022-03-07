import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UsersRepositories);

        const user = await userRepositories.findOne({email: email});

        if(!user) {
            throw new Error('Email/Passoword incorrect');
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error('Email/Passoword incorrect');
        }

        const token = sign({
            email: user.email,
        }, 
        'a83354d04e8830bef07ede66a3a0fbd0',
        {
            subject: user.id,
            expiresIn: '1d'
        });
    }
}

export { AuthenticateUserService }
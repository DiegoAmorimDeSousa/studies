import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class ComplimentsRepositories extends Repository<User>{}

export { ComplimentsRepositories }
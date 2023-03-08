import { User } from '#models/users/entities/user.entity';

export interface ISession {
  id: string;
  sessionToken: string;
  user: User;
  expires: Date;
}

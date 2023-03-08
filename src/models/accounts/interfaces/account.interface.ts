import { User } from '#models/users/entities/user.entity';

export interface IAccount {
  id: string;
  user: User;
  provider: string;
  providerAccountId: string;
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
  tokenType: string;
  scope: string;
  idToken: string;
  sessionState: string;
}

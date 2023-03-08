import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IAccount } from '#models/accounts/interfaces/account.interface';
import { User } from '#models/users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { JoinColumn } from 'typeorm';

@Entity({ name: 'accounts' })
export class Account implements IAccount {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: String })
  id: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  @ApiProperty({ type: () => User })
  user: User;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: String })
  provider: string;

  @Column({ type: 'text', nullable: false, name: 'provider_account_id' })
  @ApiProperty({ type: String })
  providerAccountId: string;

  @Column({ type: 'text', nullable: true, name: 'access_token' })
  @ApiProperty({ type: String })
  accessToken: string;

  @Column({ type: 'text', nullable: true, name: 'refresh_token' })
  @ApiProperty({ type: String })
  refreshToken: string;

  @Column({ type: 'int', nullable: true, name: 'expires_at' })
  @ApiProperty({ type: Number })
  expiresAt: number;

  @Column({ type: 'text', nullable: true, name: 'token_type' })
  @ApiProperty({ type: String })
  tokenType: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  scope: string;

  @Column({ type: 'text', nullable: true, name: 'id_token' })
  @ApiProperty({ type: String })
  idToken: string;

  @Column({ type: 'text', nullable: true, name: 'session_state' })
  @ApiProperty({ type: String })
  sessionState: string;
}

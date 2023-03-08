import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '#models/users/interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'users' })
export class User implements IUser {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: String })
  id: string;

  @Column({ type: 'text', nullable: true, name: 'first_name' })
  @ApiProperty({ type: String })
  firstName: string;

  @Column({ type: 'text', nullable: true, name: 'last_name' })
  @ApiProperty({ type: String })
  lastName: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  name: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  nickname: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  username: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  email: string;

  @Column({ type: 'text', nullable: true, name: 'email_verified' })
  @ApiProperty({ type: String })
  emailVerified: Date;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  password: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  bio: string;

  @Column({ type: 'text', nullable: true })
  @ApiProperty({ type: String })
  image: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  @ApiProperty({ type: Date })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  @ApiProperty({ type: Date })
  updatedAt: Date;
}

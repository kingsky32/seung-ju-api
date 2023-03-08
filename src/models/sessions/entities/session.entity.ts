import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ISession } from '#models/sessions/interfaces/session.interface';
import { User } from '#models/users/entities/user.entity';

@Entity({ name: 'sessions' })
export class Session implements ISession {
  @PrimaryGeneratedColumn()
  @ApiProperty({ type: String })
  id: string;

  @Column({ type: 'text', nullable: false })
  @ApiProperty({ type: String })
  sessionToken: string;

  @ManyToOne(() => User, (user) => user.id, { nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  @ApiProperty({ type: () => User })
  user: User;

  @Column({ type: 'timestamp', nullable: true })
  @ApiProperty({ type: Date })
  expires: Date;
}

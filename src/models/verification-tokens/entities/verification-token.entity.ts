import { Column, Entity, Unique } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IVerificationToken } from '#models/verification-tokens/interfaces/verification-token.interface';

@Entity({ name: 'verification_tokens' })
@Unique(['identifier', 'token'])
export class VerificationToken implements IVerificationToken {
  @Column({ type: 'text', primary: true })
  @ApiProperty({ type: String })
  identifier: string;

  @Column({ type: 'text' })
  @ApiProperty({ type: String })
  token: string;

  @Column({ type: 'timestamp' })
  @ApiProperty({ type: Date })
  expires: Date;
}

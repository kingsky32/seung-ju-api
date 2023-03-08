import { Module } from '@nestjs/common';
import { ThrottlerConfigModule } from '#configs/throttler/config.module';
import { AppConfigModule } from '#configs/app/config.module';
import { PostgresDatabaseProviderModule } from '#providers/database/postgres/provider.module';

@Module({
  imports: [
    AppConfigModule,
    PostgresDatabaseProviderModule,
    ThrottlerConfigModule,
  ],
})
export class AppModule {}

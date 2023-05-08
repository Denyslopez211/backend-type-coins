import { Module } from '@nestjs/common';
import { CoinModule } from './app/coin/coin.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), CoinModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

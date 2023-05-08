import { Module } from '@nestjs/common';
import { CoinService } from './services/coin.service';
import { HttpModule } from '@nestjs/axios';
import { CoinController } from './controllers/coin.controller';

@Module({
  imports: [HttpModule],
  providers: [CoinService],
  controllers: [CoinController],
})
export class CoinModule {}

import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { CoinService } from '../services/coin.service';
import { IResponse } from '../interfaces';

@Controller('api/v1')
export class CoinController {
  constructor(private coinService: CoinService) {}

  @Get('/coins')
  @ApiResponse({ status: HttpStatus.OK, description: 'The indicator' })
  async getCoins(): Promise<IResponse> {
    return this.coinService.getCoins();
  }
}

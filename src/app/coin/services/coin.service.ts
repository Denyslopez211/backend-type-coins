import { HttpService } from '@nestjs/axios';
import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CoinResult, ICoin, IResponse } from '../interfaces';

@Injectable()
export class CoinService {
  constructor(private httpService: HttpService) {}

  public getCoins = async (): Promise<IResponse> => {
    try {
      const result = await lastValueFrom(this.httpService.get(process.env.URL));
      if (result.status === HttpStatus.OK) {
        return this.buildResponse(result.data);
      }
      throw new BadRequestException('Not Found');
    } catch (error) {
      throw new BadRequestException('Error communicating with the server external');
    }
  };

  private buildResponse = (data): IResponse => {
    const { version, fecha, autor, ...typesCoins } = data;
    const coins: CoinResult[] = Object.values(typesCoins);
    return {
      version,
      date: fecha,
      author: autor,
      coins: coins.map(
        (coin: CoinResult): ICoin => ({
          code: coin?.codigo,
          name: coin?.nombre,
          unitMeasure: coin?.unidad_medida,
          date: coin?.fecha,
          value: coin?.valor,
        }),
      ),
    };
  };
}

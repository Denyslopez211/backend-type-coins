import { Test, TestingModule } from '@nestjs/testing';
import { CoinService } from './services/coin.service';
import { HttpService } from '@nestjs/axios';
// import { response } from './mock/response';
// import { of } from 'rxjs';

describe('CoinService', () => {
  let coinService: CoinService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoinService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    coinService = module.get<CoinService>(CoinService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(coinService).toBeDefined();
    expect(httpService).toBeDefined();
  });

  describe('getCoins', () => {
    it('should the coins', async () => {
      // jest
      //   .spyOn(httpService, 'get')
      // .mockReturnValueOnce(of({ status: 200, statusText: 'OK', config: {}, headers: {}, data: response }));
      const result = await coinService.getCoins();
      expect(result).toBeTruthy();
      expect(httpService.get).toBeCalledTimes(1);
    });
  });
});

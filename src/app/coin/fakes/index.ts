import { response } from '../mock/response';

export class CoinServiceFake {
  public async getCoins(): Promise<any> {
    return Promise.resolve(response);
  }
}

export interface CoinResult {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

export interface ICoin {
  code: string;
  name: string;
  unitMeasure: string;
  date: string;
  value: number;
}

export interface IResponse {
  version: string;
  author: string;
  date: string;
  coins: ICoin[];
}

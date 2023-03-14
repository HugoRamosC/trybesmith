export interface IProductModel {
  id: number,
  name: string,
  amount: string,
  orderId?: number,
}

export type IProduct = Omit <IProductModel, 'id'>;

export interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string,
}

export type IUser = Omit <IUserModel, 'id'>;

export type IUserToken = Omit <IUserModel, 'vocation' | 'level' | 'password'>;

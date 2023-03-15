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

export interface IOrderModel {
  id: number,
  userId: number,
}

export interface ILogin {
  username: string,
  password: string,
  user: object,
}

export interface IError {
  status: number,
  message: string,
}

export interface IBaseRouter {
  path: string;
  element?: JSX.Element;
}

export interface IRouter extends IBaseRouter {
  children?: IBaseRouter[];
}

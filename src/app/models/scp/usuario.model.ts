export class Usuario {
  constructor(
    public nombre: string,
    public user: string,
    public email: string,
    public password?: string,
    public img?: string,
    public google?: string,
    public role?: string,
    public uid?: string,
    public createdby?: string,
    public grupo?: string
  ) {}
}

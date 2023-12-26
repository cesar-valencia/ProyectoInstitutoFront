export class Empresa {
  constructor(
    public id: string,
    public nombre: string,
    public direccion: string,
    public telefono1?: string,
    public telefono2?: string,
    public celular1?: string,
    public celular2?: string
  ) {}
}

export class Persona {
  constructor(
    public id: string,
    public tipo_documento: string,
    public expedida_en: string,
    public nombre: string,
    public apellido_paterno: string,
    public apellido_materno: string,
    public estado_civil: string,
    public fecha_nacimiento: string,
    public ciudad_nacimiento: string,
    public pais_nacimiento: string,
    public email: string,
    public celular1: string,
    public celular2: string,
    public sexo: string,
    public perfil: string,
    public foto: string
  ) {}
}

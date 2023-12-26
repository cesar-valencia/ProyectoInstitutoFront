export class ExperienciaLaboral {
  constructor(
    public id: string,
    public id_persona: string,
    public id_empresa: string,
    public id_cargo: string,
    public fecha_ingreso: string,
    public fecha_retiro: string,
    public salario: string
  ) {}
}

export class MatriculaPrograma {
  constructor(
    public id: string,
    public id_estudiante: string,
    public id_programa: string,
    public semestre: string,
    public fecha_matricula: string,
    public valor: string,
    public forma_pago: string
  ) {}
}

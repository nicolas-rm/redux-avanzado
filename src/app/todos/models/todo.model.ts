export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;
  // public id: number;
  // public id: number;
  // public id: number;

  constructor(texto: string) {
    this.texto = texto;
    this.id = new Date().getTime();
    this.completado = false;
  }
}

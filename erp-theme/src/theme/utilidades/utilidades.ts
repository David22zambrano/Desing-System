export class Utilidades {
  public static partirIniciales(nombre: string, cantidadLetras: number): string {
    const [primero, segundo] = nombre.split(' ');
    return segundo ? primero[0] + segundo[0] : primero.slice(0, cantidadLetras);
  }
}

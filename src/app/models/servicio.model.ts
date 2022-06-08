import { ServiceLocation } from './location.model';

export class Servicio {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public frecuencia: string,
    public precioHora: number,
    public cantidadHoras: number,
    public genero: string,
    public cantidadPersonas: number,
    public fecha: Date,
    public hora: string,
    public userId: string,
    public location: ServiceLocation
  ) {}
}

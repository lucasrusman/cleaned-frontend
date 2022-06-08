/* eslint-disable @typescript-eslint/quotes */
import { ServiceLocation } from '../models/location.model';

export interface ServicioData {
  id: string;
  title: string;
  description: string;
  frecuencia: string;
  precioHora: number;
  cantidadHoras: number;
  genero: string;
  cantidadPersonas: number;
  fecha: Date;
  hora: string;
  userId: string;
  location: ServiceLocation;
}

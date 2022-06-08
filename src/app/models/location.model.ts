export interface Coordinates {
  lat: number;
  lng: number;
}

export interface ServiceLocation extends Coordinates {
  address: string;
  staticMapImageUrl: string;
}

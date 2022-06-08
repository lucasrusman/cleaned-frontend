// /* eslint-disable @typescript-eslint/no-shadow */
// /* eslint-disable arrow-body-style */
// /* eslint-disable @typescript-eslint/quotes */
// /* eslint-disable @typescript-eslint/member-ordering */
// /* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
// import { BehaviorSubject, of } from 'rxjs';
// import { take, map, tap, delay, switchMap } from 'rxjs/operators';

// import { Servicio } from './../models/servicio.model';
// import { AuthService } from './auth.service';
// import { HttpClient } from '@angular/common/http';
// import { ServiceLocation } from './../models/location.model';
// import { ServicioData } from './../interfaces/servicioData';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
//   private servicios = new BehaviorSubject<Servicio[]>([]);

//   getServices() {
//     return this.servicios.asObservable();
//   }

//   constructor(private authService: AuthService, private http: HttpClient) {}

//   getPlace(id: string) {
//     return this.authService.getToken().pipe(
//       take(1),
//       switchMap(token => {
//         return this.http.get<ServicioData>(
//           'hola' //cambiar esta ruta por una del be
//         );
//       }),
//       map(
//         servicioData =>
//           new Servicio(
//             id,
//             servicioData.title,
//             servicioData.description,
//             servicioData.frecuencia,
//             servicioData.precioHora,
//             servicioData.cantidadHoras,
//             servicioData.genero,
//             servicioData.cantidadPersonas,
//             new Date(servicioData.fecha),
//             servicioData.hora,
//             servicioData.userId,
//             servicioData.location
//           )
//       )
//     );
//   }
//   fetchServices() {
//     return this.authService.getToken().pipe(
//       take(1),
//       switchMap(token => {
//         return this.http.get<{ [key: string]: ServicioData }>(
//           ''
//           //`https://ionic-project-course-d3842-default-rtdb.firebaseio.com/offered-servicios.json?auth=${token}`
//         );
//       }),
//       map(resData => {
//         const servicios = [];
//         for (const key in resData) {
//           if (resData.hasOwnProperty(key)) {
//             servicios.push(
//               new Servicio(
//                 key,
//                 resData[key].title,
//                 resData[key].description,
//                 resData[key].frecuencia,
//                 resData[key].precioHora,
//                 resData[key].cantidadHoras,
//                 resData[key].genero,
//                 resData[key].cantidadPersonas,
//                 new Date(resData[key].fecha),
//                 resData[key].hora,
//                 resData[key].userId,
//                 resData[key].location
//               )
//             );
//           }
//         }
//         return servicios;
//       }),
//       tap(servicios => {
//         this.servicios.next(servicios);
//       })
//     );
//   }
//   addService(
//     title: string,
//     description: string,
//     frecuencia: string,
//     precioHora: number,
//     cantidadHoras: number,
//     genero: string,
//     cantidadPersonas: number,
//     fecha: Date,
//     hora: string,
//     userId: string,
//     location: ServiceLocation
//   ) {
//     let generatedId: string;
//     let fetchedUserId: string;
//     let newService: Servicio;
//     return this.authService.getUserId().pipe(
//       take(1),
//       switchMap(userId => {
//         fetchedUserId = userId;
//         return this.authService.getToken();
//       }),
//       take(1),
//       switchMap(token => {
//         if (!fetchedUserId) {
//           throw new Error('User ID not found');
//         }
//         newService = new Servicio(
//           Math.random().toString(),
//           title,
//           description,
//           frecuencia,
//           precioHora,
//           cantidadHoras,
//           genero,
//           cantidadPersonas,
//           fecha,
//           hora,
//           fetchedUserId,
//           location
//         );
//         return this.http.post<{ name: string }>(
//           //cambiar por una ruta del be
//           'hola',
//           { ...newService, id: null }
//         );
//       }),
//       switchMap(resData => {
//         generatedId = resData.name;
//         return this.servicios;
//       }),
//       take(1),
//       tap(servicios => {
//         newService.id = generatedId;
//         this.servicios.next(servicios.concat(newService));
//       })
//     );
//   }

//   updateService(servicioId: string, title: string, description: string) {
//     let updatedServices: Servicio[];
//     let fetchedToken: string;
//     return this.authService.getToken().pipe(
//       take(1),
//       switchMap(token => {
//         fetchedToken = token;
//         return this.servicios;
//       }),
//       take(1),
//       switchMap(servicios => {
//         if (!servicios || servicios.length <= 0) {
//           return this.fetchServices();
//         } else {
//           return of(servicios);
//         }
//       }),
//       switchMap(servicios => {
//         const updatedServiceIndex = servicios.findIndex(sl => sl.id === servicioId);
//         updatedServices = [...servicios];
//         const oldServicio = updatedServices[updatedServiceIndex];
//         updatedServices[updatedServiceIndex] = new Servicio(
//           oldServicio.id,
//           title,
//           description,
//           oldServicio.frecuencia,
//           oldServicio.precioHora,
//           oldServicio.cantidadHoras,
//           oldServicio.genero,
//           oldServicio.cantidadPersonas,
//           oldServicio.fecha,
//           oldServicio.hora,
//           oldServicio.userId,
//           oldServicio.location
//         );
//         return this.http.put(
//           `https://ionic-project-course-d3842-default-rtdb.firebaseio.com/offered-servicios/${servicioId}.json?auth=${fetchedToken}`,
//           { ...updatedServices[updatedServiceIndex], id: null }
//         );
//       }),
//       tap(() => {
//         this.servicios.next(updatedServices);
//       })
//     );
//   }
//   uploadImage(image: File) {
//     const uploadData = new FormData();
//     uploadData.append('image', image);
//     return this.authService.getToken().pipe(
//       take(1),
//       switchMap(token =>
//         this.http.post<{ imageUrl: string; imagePath: string }>(
//           'https://us-central1-ionic-project-course.cloudfunctions.net/storeImage',
//           uploadData,
//           { headers: { authorization: 'Bearrer ' + token } }
//         )
//       )
//     );
//   }
 }

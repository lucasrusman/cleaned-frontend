import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { ServiceLocation } from '../../../../models/location.model';
import { switchMap } from 'rxjs/operators';
import { ServiciosService } from '../../../../services/servicios.service';
// function base64toBlob(base64Data, contentType) {
//   contentType = contentType || '';
//   const sliceSize = 1024;
//   const byteCharacters = atob(base64Data);
//   const bytesLength = byteCharacters.length;
//   const slicesCount = Math.ceil(bytesLength / sliceSize);
//   const byteArrays = new Array(slicesCount);

//   for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
//     const begin = sliceIndex * sliceSize;
//     const end = Math.min(begin + sliceSize, bytesLength);

//     const bytes = new Array(end - begin);
//     for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
//       bytes[i] = byteCharacters[offset].charCodeAt(0);
//     }
//     byteArrays[sliceIndex] = new Uint8Array(bytes);
//   }
//   return new Blob(byteArrays, { type: contentType });
// }
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.page.html',
  styleUrls: ['./direccion.page.scss']
})
export class DireccionPage {
  //form: FormGroup;

  // constructor(
  //   private servicioService: ServiciosService,
  //   private router: Router,
  //   private loadingCtrl: LoadingController
  // ) {}

  // ngOnInit() {
    // this.form = new FormGroup({
      // location: new FormControl(null, { validators: [Validators.required] })
    // });
  // }

  // onCreateOffer() {
  //   if (!this.form.valid) {
  //     return;
  //   }
  //   this.loadingCtrl
  //     .create({
  //       message: 'Creando solicitud...'
  //     })
  //     .then(loadingEl => {
  //       loadingEl.present();
  //       this.servicioService
  //         .uploadImage(this.form.get('image').value)
  //         .pipe(
  //           switchMap(uploadResponse => this.servicioService.addService(this.form.value.location))
  //         )
  //         .subscribe(() => {
  //           loadingEl.dismiss();
  //           this.form.reset();
  //           this.router.navigate(['/places/tabs/offers']);
  //         });
  //     });
  // }
  // onLocationPicked(locationAr: ServiceLocation) {
  //   this.form.patchValue({ location: locationAr });
  // }
}

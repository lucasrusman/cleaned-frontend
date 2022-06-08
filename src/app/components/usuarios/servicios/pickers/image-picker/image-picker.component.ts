import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {
  @Output() imagePick = new EventEmitter<string | File>();
  @ViewChild('filePicker') filePickerRef: ElementRef<HTMLInputElement>;
  @Input() showPreview = false;
  selectedImage: string;
  usePicker = false;
  constructor(private plataform: Platform) {}

  ngOnInit() {
    console.log('Mobile', this.plataform.is('mobile'));
    console.log('Hybrid', this.plataform.is('hybrid'));
    console.log('IOS', this.plataform.is('ios'));
    console.log('Android', this.plataform.is('android'));
    console.log('Desktop', this.plataform.is('desktop'));
    if (
      (this.plataform.is('mobile') && !this.plataform.is('hybrid')) ||
      this.plataform.is('desktop')
    ) {
      this.usePicker = true;
    }
  }
  onPickImage() {
    if (!Camera) {
      this.filePickerRef.nativeElement.click();
      return;
    }
    Camera.getPhoto({
      quality: 50,
      source: CameraSource.Prompt,
      correctOrientation: true,
      height: 320,
      width: 200,
      resultType: CameraResultType.Base64,
    })
      .then((image) => {
        this.selectedImage = image.base64String;
        this.imagePick.emit(image.base64String);
      })
      .catch((err) => {
        console.log(err);
        if (this.imagePick) {
          this.filePickerRef.nativeElement.click();
        }
        return false;
      });
  }
  onFileChosen(event: Event) {
    const pickedFile = (event.target as HTMLInputElement).files[0];
    if (!pickedFile) {
      return;
    }
    const fr = new FileReader();
    fr.onload = () => {
      const dataUrl = fr.result.toString();
      this.selectedImage = dataUrl;
      this.imagePick.emit(pickedFile);
    };
    fr.readAsDataURL(pickedFile);
  }
}

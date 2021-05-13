import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( image: string ): string {

    if ( image ) {
      return `http://localhost:8080/api/images/${ image }`;
    } else {
      return './assets/no-image.png';
    }

  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( image: string ): string {

    if ( image ) {
      return `${environment.apiUrl}/images/${ image }`;
    } else {
      return './assets/no-image.png';
    }

  }

}

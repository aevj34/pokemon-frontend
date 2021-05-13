import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform( image: string ): string {

    if ( image ) {
      return `${environment.apiUrl}/thumbnails/${ image }`;
    } else {
      return './assets/no-image.png';
    }

  }

}

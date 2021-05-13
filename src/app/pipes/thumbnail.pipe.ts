import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform( image: string ): string {

    if ( image ) {
      return `http://localhost:8080/api/thumbnails/${ image }`;
    } else {
      return './assets/no-image.png';
    }

  }

}

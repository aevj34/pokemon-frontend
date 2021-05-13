import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftPad'
})
export class LeftPadPipe implements PipeTransform {

  transform(item: string): string {
    return  'N°' + (String('0').repeat(3) + item).substr((3 * -1), 3);
}

}

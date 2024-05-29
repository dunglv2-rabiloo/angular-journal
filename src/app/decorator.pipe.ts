import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decorator',
  standalone: true,
})
export class DecoratorPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value + ' 💚';
  }
}

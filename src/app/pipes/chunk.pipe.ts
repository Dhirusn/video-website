import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {

  transform(arr: any[], chunkSize: number): any[] {
    if (!arr.length) {
      return [];
    }

    return arr.reduce((acc, curr, index) => {
      if (index % chunkSize === 0) {
        acc.push([curr]);
      } else {
        acc[acc.length - 1].push(curr);
      }
      return acc;
    }, []);
  }
}

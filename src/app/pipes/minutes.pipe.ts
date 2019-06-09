import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutes'
})
export class MinutesPipe implements PipeTransform {
  transform(value: number): string {
    const minutes = Math.floor(value / 60);
    const seconds = value - minutes * 60;
    const formattedMinutes = `${minutes < 10 ? '0' + minutes : minutes}`;
    const formattedSeconds = `${seconds < 10 ? '0' + seconds : seconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  }
}

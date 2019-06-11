import { Injectable } from '@angular/core';

export enum AudioSourcesEnum {
  default,
  break
}

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private sources: { type: AudioSourcesEnum; src: string }[] = [
    {
      type: AudioSourcesEnum.default,
      src: 'assets/audio/default.mp3'
    },
    {
      type: AudioSourcesEnum.break,
      src: 'assets/audio/break.mp3'
    }
  ];

  play(type: AudioSourcesEnum) {
    const source = this.sources.find(s => s.type === type);
    const audio = new Audio(source.src);
    audio.play();
  }
}

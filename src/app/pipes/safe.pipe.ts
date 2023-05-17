import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  constructor(protected _sanitizer: DomSanitizer) {
  }

  transform(url: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

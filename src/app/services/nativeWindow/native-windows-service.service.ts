import {Injectable} from '@angular/core';

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class NativeWindowsService {

  constructor() { }

  get nativeWindow(): any {
    return getWindow();
  }

}

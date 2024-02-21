import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  store(key, value) {
    localStorage[key] = JSON.stringify(value);
  }

  load(key) {
    var value = localStorage[key] || [];
    return value;
  }
  loader(key) {
    var value = localStorage[key] || null;
    return value;
  }
}
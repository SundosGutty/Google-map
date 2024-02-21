import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Item } from '../models/item-model/item-model.module';
import { StorageService } from './storage-service.service';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })

export class ItemService {
  private _items$ = new BehaviorSubject<Item[]>([]);
  public items$ = this._items$.asObservable();

  private _currItem$ = new BehaviorSubject<Item>(null);
  public currItem$ = this._currItem$.asObservable();

  constructor(private storageService: StorageService, private http: HttpClient) { }

  public query() {
    if (!this.storageService.load('drivers').length) {
      const data = this.http.get('http://localhost:8080/assets/data/users.json').subscribe((drivers: Item[]) => {
        this._items$.next(drivers);
        this._currItem$.next(drivers[0])
        this.storageService.store('drivers', drivers)
      })
    } else {
      let items = JSON.parse(this.storageService.load('drivers'));
      this._items$.next(items);
      if (this._currItem$.getValue()) {
        this._currItem$.next(this._currItem$.getValue())
      } else {
        this._currItem$.next(items[0])
      }
    }
  }

  public getItemByName(name: string): Observable<Item> {
    const items = this._items$.getValue()
    const item = items.find((item) => item.name === name);
    return of(item);
  }

  public setFocusedItem(itemName) {
    const items = this._items$.getValue()
    const driver = items.find((item) => item.name === itemName);
    this._currItem$.next(driver)
  }

  public deleteItem(name: string) {
    let drivers = this._items$.getValue();
    drivers = drivers.filter((driver) => driver.name !== name)
    this._items$.next([...drivers])
    this.storageService.store('drivers', drivers)
  }

  public updateItem(item: Item) {
    const items = this._items$.getValue();
    const itemIdx = items.findIndex((_item) => _item.name === item.name);
    items.splice(itemIdx, 1, item);
    this._items$.next([...items]);
    this.storageService.store('drivers', items);
    return of(item);
  }

  public toggleFocus(item: Item) {
    const items = this._items$.getValue();
    items.forEach((_item) => {
      if (_item.name !== item.name) item.selected = false
      else {
        item.selected = true
      }
      this.updateItem(item)
    })
  }
}

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/app/models/item-model/item-model.module';
import { Marker } from 'src/app/models/marker.model';
import { ItemService } from 'src/app/services/item-service.service';

@Component({
  selector: 'item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})

export class ItemPageComponent implements OnInit, OnDestroy {
  items: Item[];
  items$: Observable<Item[]>;
  deleteCmp;
  currItem$;
  driverName: string;
  markers: Marker[] = [];
  center: google.maps.LatLngLiteral;
  driver;

  constructor(private itemService: ItemService) { }


  ngOnInit() {
    this.itemService.query();
    this.items$ = this.itemService.items$;
    this.currItem$ = this.itemService.currItem$.subscribe((driver: Item) => {
      this.showOnMap(driver)
      this.driver = driver
    })
  }

  options: google.maps.MapOptions = {
    disableDoubleClickZoom: true,
    zoom: 9,
  }

  showOnMap(driver) {
    if (!driver.location.lat || !driver.location.lng) return
    this.toggleFocus(driver)
    this.center = {
      lat: driver.location.lat,
      lng: driver.location.lng,
    }
    this.markers = []
    this.addMarker(driver.tasks)
  }

  toggleFocus(driver) {
    this.itemService.toggleFocus(driver)
    this.driver = driver
  }

  addMarker(tasks) {
    tasks.forEach(task => {
      this.markers.push({
        position: { lat: task.location.lat, lng: task.location.lng },
        label: { color: 'red', text: task.id + (this.markers.length + 1), },
        title: task.id,
        options: { animation: google.maps.Animation.BOUNCE },
      })
    })
  }

  async removeItem(driverName: string) {
    this.driverName = driverName;
    const item = await this.itemService
      .getItemByName(this.driverName)
      .toPromise();
    this.deleteCmp = {
      title: `Delete  ${item.name} from your list?`,
      noBtn: 'Cancel',
      yesBtn: 'Delete',
    };

  }
  remover(ans) {
    ans ? this.itemService.deleteItem(this.driverName) : '';
    this.driverName = '';
  }

  ngOnDestroy() {
    this.currItem$.unsubscribe()
  }
}

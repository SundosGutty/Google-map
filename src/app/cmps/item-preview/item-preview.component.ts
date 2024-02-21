import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item-model/item-model.module';

@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss'],
})

export class ItemPreviewComponent implements OnInit {
  @Input() item: Item;
  @Input() currItem
  @Output() remove = new EventEmitter();
  @Output() show = new EventEmitter()
  ngOnInit(): void {
  }

  removeItem() {
    this.remove.emit(this.item.name);
  }
  showOnMap() {
    this.show.emit(this.item);
  }
}

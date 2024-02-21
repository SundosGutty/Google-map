import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item-model/item-model.module';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})


export class ItemListComponent implements OnInit {

  @Input() items: Item[];
  @Input() currItem
  @Output() removeItem = new EventEmitter<string>();
  @Output() showOnMap = new EventEmitter

  constructor() { }

  ngOnInit(): void {
    
  }

}

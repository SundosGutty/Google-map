import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item-model/item-model.module';
import { ItemService } from 'src/app/services/item-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  currItem: Item;
  title: string;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(async ({ name }) => {
      this.currItem = await this.itemService.getItemByName(name).toPromise()
    });

  }
  async onSubmit(form: NgForm) {
    this.currItem = { ...this.currItem, ...form.value };
    await this.itemService.updateItem(this.currItem).toPromise();
    this.itemService.setFocusedItem(this.currItem.name)
    this.router.navigateByUrl('');
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'delete-msg',
  templateUrl: './delete-msg.component.html',
  styleUrls: ['./delete-msg.component.scss'],
})
export class DeleteMsgComponent implements OnInit {
  title: string;
  noBtn: string;
  yesBtn: string;
  @Input() deleteCmp;
  @Output() answer = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.title = this.deleteCmp.title;
    this.noBtn = this.deleteCmp.noBtn;
    this.yesBtn = this.deleteCmp.yesBtn;
  }
  onHandleDelete(ans: boolean) {
    this.answer.emit(ans);
  }
}

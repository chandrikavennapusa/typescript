import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input()text=''
@Output() newItemEvent = new EventEmitter();

addNewItem(value: string) {
  this.newItemEvent.emit(value);
}
}

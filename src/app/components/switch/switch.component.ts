import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnChanges {
  @Input() label: string;
  @Input() defaultChecked: boolean;
  @Output() changed = new EventEmitter<boolean>();
  public model: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.defaultChecked) {
      this.model = changes.defaultChecked.currentValue;
    }
  }
}

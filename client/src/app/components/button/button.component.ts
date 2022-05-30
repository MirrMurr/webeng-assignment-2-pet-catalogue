import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() type!: 'primary' | 'secondary'; //ButtonStyle;
  @Input() disabled!: string | boolean; //ButtonStyle;

  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickHandler() {
    this.onClick.emit();
  }
}

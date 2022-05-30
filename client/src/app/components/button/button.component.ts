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
  @Input() type!: string; //ButtonStyle;
  @Input() disabled!: string | boolean; //ButtonStyle;

  @Output() onClickEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.onClickEmitter.emit();
  }
}

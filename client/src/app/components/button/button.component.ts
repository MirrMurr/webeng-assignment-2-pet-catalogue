import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() type!: string;
  @Input() color!: string;

  @Output() onClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAddPet() {
    console.log('add');
    this.onClick.emit();
  }
}

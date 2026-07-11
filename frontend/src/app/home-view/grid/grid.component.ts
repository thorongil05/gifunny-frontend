import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Gif } from '../../model/gif';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatGridListModule],
})
export class GridComponent {
  @Input() gifs: Gif[] = [];

  @Output() gifClickedEvent: EventEmitter<number> = new EventEmitter<number>();

  public onGifClick(position: number) {
    this.gifClickedEvent.emit(position);
  }
}

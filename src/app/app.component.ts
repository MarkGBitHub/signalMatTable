import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditableTableComponent } from "./editable-table/editable-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditableTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signalMatTable';
}

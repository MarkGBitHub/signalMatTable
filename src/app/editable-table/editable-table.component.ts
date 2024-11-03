import { Component, computed, effect, signal } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgFor,
    NgIf,
    FormsModule
  ],
  templateUrl: './editable-table.component.html',
  styleUrl: './editable-table.component.css'
})
export class EditableTableComponent {
  
  displayedColumns = ['col1', 'col2', 'sum','diff'];

  // Using signals for reactive data
  dataSource = signal([
    { col1: 10, col2: 20, sum: 30, diff:10 },
    { col1: 15, col2: 25, sum: 35, diff:10 }
  ]);

  computedTable = computed(() =>
    this.dataSource().map(row => ({
      ...row,
      sum: Number(row.col1) + Number(row.col2),
      diff: Number(row.col1) - Number(row.col2),
    }))
  );

  updateValue(rowIndex: number, colName: string, newValue: number) {
    const newData = this.dataSource().map((row, index) =>
      index === rowIndex ? { ...row, [colName]: newValue } : row
    );
    this.dataSource.set(newData);
  }
}

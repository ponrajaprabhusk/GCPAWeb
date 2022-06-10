import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { RawData } from 'src/app/Interfaces/RawData';

import { RawDataTableDataSource } from './raw-data-table-datasource';

@Component({
  selector: 'app-raw-data-table',
  templateUrl: './raw-data-table.component.html',
  styleUrls: ['./raw-data-table.component.css']
})
export class RawDataTableComponent implements OnInit,AfterViewInit {

  @Input('dataForTable') dataForTable: RawData[];
  @Input('displayColoumns') displayColoumns: string[];
  @Input('pageSize') pageSize: string;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RawData>;
  dataSource: RawDataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns:string[] = [];

  constructor(private router: Router) {
    this.dataSource = new RawDataTableDataSource();
  }

  ngOnInit(): void {
    if(this.dataForTable != undefined) {
      console.log(this.dataForTable)
      this.dataSource.data = this.dataForTable;
      this.displayedColumns = this.displayColoumns;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}

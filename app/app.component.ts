import { Component , OnInit, ViewChild  } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { ApiPrecintosService } from './api-precintos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app-sunat';
  
  displayedColumns = ['Id', 'Nombre', 'Apellido', 'Nacionalidad', "Edad"];
  dataSource: any;


  constructor(private dataService: ApiPrecintosService) {

    
  }

  ngOnInit() {  
    this.renderDataTable(); 
  }

 renderDataTable() {  
  this.dataService.getPrecintos()  
    .subscribe(  
        x => {  
  this.dataSource = new MatTableDataSource();  
  this.dataSource.data = x;  
  console.log(this.dataSource.data);
  this.dataSource.sort = this.sort ;
},  
error => {  
  console.log('There was an error while retrieving Precintos!' + error);  
});  
}

 applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
}

}

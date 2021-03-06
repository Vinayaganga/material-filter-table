import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.scss']
})
export class TableFilterComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "name",
    "username",
    "email",
    "phone",
    "website",
    "status"
  ];

  filterSelectObj = [];
  remoteDummyData = [];
  constructor() {
    // Object to create Filter for
    this.filterSelectObj = [
      {
        name: "ID",
        columnProp: "id",
        options: []
      },
      {
        name: "Name",
        columnProp: "name",
        options: []
      },
      {
        name: "User Name",
        columnProp: "username",
        options: []
      },
      {
        name: "Email",
        columnProp: "email",
        options: []
      },
      {
        name: "Status",
        columnProp: "status",
        options: []
      }
    ];
  }

  ngOnInit() {
    this.getRemoteData();
  }

  // Get Uniqu values from columns to build filter
  getFilterObject(fullObj, key) {
    const uniqChk = [];
    fullObj.filter(obj => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  // Get remote serve data using HTTP call
  getRemoteData() {
    this.remoteDummyData = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        status: "Active"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        status: "Blocked"
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
        website: "ramiro.info",
        status: "Blocked"
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
        website: "kale.biz",
        status: "Active"
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
        website: "demarco.info",
        status: "Active"
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        status: "In-Active"
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        phone: "210.067.6132",
        website: "elvis.io",
        status: "Active"
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        status: "In-Active"
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        status: "In-Active"
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        phone: "024-648-3804",
        website: "ambrose.net",
        status: "Active"
      }
    ];
    this.dataSource.data = this.remoteDummyData;

    this.filterSelectObj.filter(o => {
      o.options = this.getFilterObject(this.remoteDummyData, o.columnProp);
    });
  }

  // Called on Filter change
  filterChange() {
    let filteredData = [];
    this.filterSelectObj.map(filter => {
      if (filter.modelValue && filter.modelValue.length) {
        const selectedValueArray = filter.modelValue;
        console.log(selectedValueArray);
        if (filteredData && !filteredData.length) {
          filteredData = this.remoteDummyData.filter(data => {
            return (
              data &&
              data[filter.columnProp] &&
              selectedValueArray.indexOf(data[filter.columnProp]) !== -1
            );
          });
        } else {
          filteredData = filteredData.filter(data => {
            return (
              data &&
              data[filter.columnProp] &&
              selectedValueArray.indexOf(data[filter.columnProp]) !== -1
            );
          });
        }
      }
    });
    this.dataSource.data = filteredData;
  }

  // Reset table filters
  resetFilters() {
    this.filterSelectObj.forEach((value, key) => {
      value.modelValue = undefined;
    });
    this.getRemoteData();
  }
}

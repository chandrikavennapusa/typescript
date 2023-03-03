import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
     employee=[{ id:101 , name:"farmer" ,place:"india"},
     { id:102 , name:"salesman" ,place:"uk"},
     { id:103 , name:"manager" ,place:"usa"}
    ];
  

}

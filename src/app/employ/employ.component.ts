import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IEmploymentListItem } from '../models/employment';

@Component({
  //selector: 'app-products',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.scss']
})
export class EmployComponent implements OnInit {

  public selectedValue : number;
  public applicants : IEmploymentListItem[];
  public showLoader : boolean = false;
  public selectedId : number = -1;

    constructor(  private route: ActivatedRoute,
                  private employService: EmployService,
                  private router: Router) {
    //this.active = true;
   }

  ngOnInit() {
    // Get applicants for list
    this.getApplicants();
  }

  public selectedRow(i){
    //alert(i);
    this.selectedId = i;
  }

  public getApplicants(){
    this.showLoader = true;
    this.employService.getApplicants()
      .subscribe((data: IEmploymentListItem[]) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.applicants = data;
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
        },
        // On Error
        (err:any) => {
          console.log(err);
          alert(err);
          this.showLoader = false;
        },
        // Finally
        () => this.showLoader = false);
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-products',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  public locationCode : string;

  ngOnInit() {
  }

  public navigateToShare(){
    // Validate location code
    if ( this.locationCode ){
      if ( this.locationCode.match(/^[a-f0-9]{10}$/i) == null )
      {
          alert("Code: "+this.locationCode+" is invalid, it must only contain the characters A-F and 0-9")
          return;
      }

      // Verify the location code exists
      
    }
  }
}

import { Component, OnInit } from '@angular/core';

import { FileUploader, Headers } from 'ng2-file-upload/ng2-file-upload';

import { ConfigService } from "../services/config.service";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  public locationCode : string;
  private url : string;
  public uploader : FileUploader;
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
  private config : any;

  constructor(private configService: ConfigService){
        this.config = configService.config;
  }

  ngOnInit() {
    this.url = this.config.apiUrl+"/files";
    this.uploader = new FileUploader({
      url: this.url}
    );

    // ,
    //   headers: <Headers[]> [
    //       { name: 'Content-Type', value: 'multipart/form-data; boundary=----WebKitFormBoundaryXAIXdwxDD9DS3PsV' }
    //   ]
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

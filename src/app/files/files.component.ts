import { Component, OnInit, NgZone } from '@angular/core';

//import { FileUploader, Headers } from 'ng2-file-upload/ng2-file-upload';

import { ConfigService } from "../services/config.service";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {

  public locationCode : string;
  private url : string;
  //public uploader : FileUploader;
  //public hasAnotherDropZoneOver:boolean = false;
  private config : any;
  
  private zone: NgZone;
  private basicOptions: Object;
  public progress: number = 0;
  public response: any = {};
  public speed: string;

  constructor(private configService: ConfigService){
        this.config = configService.config;
  }

  public handleUpload(data: any): void {
    this.zone.run(() => {
      this.response = data;
      this.progress = data.progress.percent;
      this.speed = data.speedAverageHumanized;
    });
  }

  ngOnInit() {
    this.url = this.config.apiUrl+"/files";
    this.basicOptions  = {url: this.url, calculateSpeed: true };
    this.zone = new NgZone({ enableLongStackTrace: false });
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

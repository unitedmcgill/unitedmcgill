import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';

@Component({
    selector : 'app-jumbotron',
    templateUrl: 'jumbotron.component.html'
})
export class JumbotronComponent implements OnInit {

  title = 'app works!';
  public myInterval:number = 8000;
  public noWrapSlides:boolean = false;
  public slides:Array<any> = [];

  public constructor() {
    // Set the images for the jumbotron
    this.slides.push({
        image: `assets/img/carousel/umc.jpg`,
        text: ``
      },
      {
        image: `assets/img/carousel/airclean.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/airflow.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/airpressure.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/airsilence.jpg`,
        text:`` 
      },
      {
        image: `assets/img/carousel/airseal.jpg`,
        text:`` 
      });

    // for (let i = 0; i < 4; i++) {
    //   this.addSlide();
    // }
  }

  // public addSlide():void {
  //   let newWidth = 600 + this.slides.length + 1;
  //   this.slides.push({
  //     image: `//placekitten.com/${newWidth}/300`,
  //     text: `${['More', 'Extra', 'Lots of', 'Surplus'][this.slides.length % 4]}
  //     ${['Cats', 'Kittys', 'Felines', 'Cutes'][this.slides.length % 4]}`
  //   });
  // }

  // public removeSlide(index:number):void {
  //   this.slides.splice(index, 1);
  // }  

    ngOnInit(): void {
        
    }
}

import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { PrimeNgService } from './services/prime-ng.service';
import { ICountries } from '../core-services/models/countries';
import { IImages } from '../core-services/models/images';
import { IAccordion, ITabMenuItems, ICars } from '../core-services/models/model';
import {MessageService} from 'primeng/api'


@Component({
  selector: 'app-prime-ng',
  templateUrl: './prime-ng.component.html',
  styleUrls: ['./prime-ng.component.css'],
  providers: [MessageService]
})
export class PrimeNgComponent implements OnInit {
  // to display dropdown
  public countriesList: ICountries[];
  public selectedItem: ICountries;

  // to display LightBox
  public images: IImages[];

  // to get the accordion data

  public accordionList : IAccordion[];

  // to get tab menu 
  public  items : ITabMenuItems[];

  // to display rating 
  public msg: string;

  //to display slider
  public SliderValue: number;

  // to get the carosel inputs 
  public carsList :ICars[];

  // to get Table View 

  public treeData: any;

  cols: any[];

  // calender 

  public en: any;
  public selectedDate : Date;

  // charts
  public charData: any;

  

  constructor(private primeNgService: PrimeNgService, 
    private messageService: MessageService, 
    private elem: ElementRef,
    private render: Renderer2) { 
    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
      monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
      today: 'Today',
      clear: 'Clear',
      dateFormat: 'mm/dd/yy',
      weekHeader: 'Wk'
  };

  this.charData = {
    labels: ['A','B','C'],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]    
    };
  }

  ngOnInit() {

    this.primeNgService.getCountryList().subscribe((data) => {
      this.countriesList = Object.values(data);

    });

    this.primeNgService.getImagesList().subscribe((data) => {
      this.images = Object.values(data);

    });

    this.primeNgService.getAccordionContent().subscribe((data) => {
      this.accordionList = Object.values(data);

    });
    this.primeNgService.getTabMenuContent().subscribe((data) => {
      this.items = Object.values(data);

    });

    this.primeNgService.getCarosel().subscribe((data) => {
      this.carsList = Object.values(data);

    });

    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
  ];

    this.primeNgService.getTableView().subscribe((data) => {
      this.treeData = Object.values(data);

         });

  
  }

 public  handleRate(event) {
    this.msg = "You have rated " + event.value;
}

public handleCancel(event) {
    this.msg = "Rating Cancelled";
}

showSuccess() {
 
  this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
}

showInfo() {
  this.messageService.add({severity:'info', summary: 'Info Message', detail:'PrimeNG rocks'});
}

showWarn() {
  this.messageService.add({severity:'warn', summary: 'Warn Message', detail:'There are unsaved changes'});
}

showError() {
  this.messageService.add({severity:'error', summary: 'Error Message', detail:'Validation failed'});
}

// to filter the ng components items from the dom for left side navigations

public filterUI(type: string){
 let elements = this.elem.nativeElement.querySelectorAll('.item');
   elements.forEach((element : ElementRef) => {
    this.render.addClass( element, 'hideClass');
  });
  let currentID = `#prime-custom-${type}`;
  this.render.removeClass(this.elem.nativeElement.querySelector(currentID), 'hideClass');

  let elementsActive = this.elem.nativeElement.querySelectorAll('.active');
  elementsActive.forEach((element : ElementRef) => {
    this.render.removeClass( element, 'active');
  });
  let attributeId  = `#filter-item-${type}`;
  this.render.addClass(this.elem.nativeElement.querySelector(attributeId), 'active');
 
}


}

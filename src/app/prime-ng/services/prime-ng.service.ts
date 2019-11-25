import { Injectable } from '@angular/core';
import { ICountries } from '../../core-services/models/countries';
import { RestService } from '../../core-services/rest.service';
import { Observable } from 'rxjs';
import { IImages } from 'src/app/core-services/models/images';
import { IAccordion, ITabMenuItems, ICars } from '../../core-services/models/model';


@Injectable({
  providedIn: 'root'
})
export class PrimeNgService {

  constructor(private productListService: RestService<ICountries>, 
    private imagesListService: RestService<IImages>,
    private accordionContentListService: RestService<IAccordion>,
    private tabMenuService: RestService<ITabMenuItems>,
    private caroselItemService: RestService<ICars>,
    private tableTreeView: RestService<any>
    ) { }

  public getCountryList(): Observable<ICountries> {
    return this.productListService.getData("http://localhost:3000", '/countries',
      'application/json', '');

  }

  public getImagesList(): Observable<IImages> {
    return this.imagesListService.getData("http://localhost:3000", '/images',
      'application/json', '');

  }

  public getAccordionContent(): Observable<IAccordion> {
    return this.accordionContentListService.getData("http://localhost:3000", '/accordion',
      'application/json', '');

  }
  public getTabMenuContent(): Observable<ITabMenuItems> {
    return this.tabMenuService.getData("http://localhost:3000", '/tabitems',
      'application/json', '');

  }
  public getCarosel(): Observable<ICars> {
    return this.caroselItemService.getData("http://localhost:3000", '/cars',
      'application/json', '');

  }

  public getTableView(): Observable<ICars> {
    return this.tableTreeView.getData("http://localhost:3000", '/treeview',
      'application/json', '');

  }


}

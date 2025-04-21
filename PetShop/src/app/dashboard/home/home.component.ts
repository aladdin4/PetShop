import { Component } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, interval, take } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ProductsService } from '../../core/services/products.service';
import { Product, ProductCategory } from '../../core/models/product';
import { MainService } from '../../core/services/main.service';
import { ToastrDisplayService } from '../../core/services/toastr.service';
import { UsersService } from '../../core/services/users.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

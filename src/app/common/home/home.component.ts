import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { ClientDashboardComponent } from '../../client/client-dashboard/client-dashboard.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, HeaderComponent, ClientDashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

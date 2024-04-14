import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss',
})
export class ClientDashboardComponent implements OnInit {
  customers!: any;
  clientService = inject(ClientService);
  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.clientService.getCustomers().subscribe({
      next: (data: any) => {
        console.log(data);
        this.customers = data;
      },
    });
  }
}

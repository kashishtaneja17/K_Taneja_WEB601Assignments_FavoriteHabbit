import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from "./content-list/content-list.component";
import { MessagesComponent } from './messages/messages.component';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { InMemoryDataService } from './services/in-memory-data.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { Content } from './helper-files/content-interface';
import { FavoriteHabbitService } from './services/favorite-habbit.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContentListComponent, MessagesComponent, ContentCardComponent, ModifyContentComponent, HttpClientModule]
})
export class AppComponent {
  title = 'K_Taneja_WEB601Assignments_FavouriteHabbit';
  items:any;

  constructor(private FavoriteHService: FavoriteHabbitService) { }

  ngOnInit() {
    // Fetch data when component is initialized
    this.getContentById(5);
  }
  
  getContentById(num: number) {
    
    this.FavoriteHService.getContentById(num).subscribe(content => {
      this.items = content;
    });
  }
}

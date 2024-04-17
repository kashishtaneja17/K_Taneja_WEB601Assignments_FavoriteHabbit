import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from "./content-list/content-list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent]
})
export class AppComponent {
  title = 'K_Taneja_WEB601Assignments_FavouriteHabbit';
}

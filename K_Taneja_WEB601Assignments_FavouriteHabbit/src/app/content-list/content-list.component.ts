import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { ContentTypeFilterPipe } from '../content-type-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { FavoriteHabbitService } from '../services/favorite-habbit.service';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { ModifyContentComponent } from '../modify-content/modify-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, ContentTypeFilterPipe, FormsModule, HoverAffectDirective, ModifyContentComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
onContentAdded($event: Content) {
throw new Error('Method not implemented.');
}

  showContentIdTitle(contentItem:Content): void {
    console.log(`ID: ${contentItem.id}, Title: ${contentItem.title}`);
  }

  @Input () contentItems: Content[] = [];
  @Input() items:Content[] = [];
  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>(); 
  contentList: Content[] = [];
  
  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;
  selectedContent?: Content;
  
  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;

  }
  constructor (private FavoriteHService:FavoriteHabbitService, private MessageService:MessageService){ }
  ngOnInit() {

    
    this.FavoriteHService.getContentObs().subscribe(content => this.contentItems = content);
    this.FavoriteHService.getContentById(4).subscribe(content=> this.items = content);
    console.log(this.items);
  }
  
  onSelect(content: Content):void{
    this.selectedContent = content;
    this.MessageService.add(`Content itme at ${content.id}`);
    console.log("clicked");
  }
 /* ngOnInit(): void {
    this.contentItems = [
  {
    id: 1,
    title: "Photography",
    description: "Capturing moments, emotions, and scenes through the lens of a camera, turning them into lasting memories.",
    creator: "Photographers",
    imgURL: "https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg",
    type: "Hobby",
    tags: ["Photography", "Camera", "Memories"]
  },
  {
    id: 2,
    title: "Gardening",
    description: "Nurturing plants and flowers, creating beautiful landscapes, and enjoying the tranquility of nature in your own backyard.",
    creator: "Gardeners",
    imgURL: "https://i.cbc.ca/1.6293028.1684521050!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/woman-gardening.jpg",
    type: "Hobby",
    tags: ["Gardening", "Plants", "Nature"]
  },
  {
    id: 3,
    title: "Traveling",
    description: "Exploring new places, cultures, and cuisines, broadening horizons and creating unforgettable experiences.",
    creator: "Travel Enthusiasts",
    imgURL: "https://www.pacificvoyagers.org/wp-content/uploads/2019/10/shutterstock_144112840.jpg",
    type: "Hobby",
    tags: ["Travel", "Adventure", "Culture"]
  },
  {
    id: 4,
    title: "Music",
    description: "Playing instruments, enjoying melodies, and exploring the world of music.",
    creator: "Musicians",
    imgURL: "https://valleycultural.org/wp-content/uploads/2021/07/Music-1110x739.jpg",
    type: "Art",
    tags: ["Music", "Instruments", "Melodies"]
  },
  {
    id: 5,
    title: "Hiking",
    description: "Exploring nature trails, enjoying fresh air, and embracing outdoor adventures.",
    creator: "Outdoor Enthusiasts",
    imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr_LsPesKn9vJTHaq6mnGCIQeGMRy96jRQxjY2h79zQ&s",
    type: "Adventure",
    tags: ["Hiking", "Nature", "Adventure"]
  },
  {
    id: 6,
    title: "Cycling",
    description: "Riding bikes, exploring new paths, and staying active outdoors.",
    creator: "Cyclists",
    imgURL: "https://c.ndtvimg.com/2020-08/dtm9edd8_cycling_625x300_05_August_20.jpg?im=Resize=(1230,900)",
    type: "Exercise",
    tags: ["Cycling", "Outdoor", "Exercise"]
  },
  {
    id: 7,
    title: "Cooking",
    description: "Creating delicious dishes, experimenting with flavors, and enjoying homemade meals.",
    creator: "Home Chefs",
    imgURL: "https://www.harryanddavid.com/blog/wp-content/uploads/2022/07/cooking-therapy-hero.jpeg",
    type: "Hobby",
    tags: ["Cooking", "Food", "Recipes"]
  }
]
}
onContentCreated(newContent: any) {
  console.log("New content that was added: ", newContent);
  this.contentItems.unshift({ ...newContent });
  }*/
}

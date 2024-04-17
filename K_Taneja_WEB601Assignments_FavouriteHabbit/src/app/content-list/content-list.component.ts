import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit{
  @Input () contentList: Content[] = [];


  ngOnInit(): void {
    this.contentList = [
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
  }
]
}

  showContentIdTitle(contentList:Content): void {
    console.log(`ID: ${contentList.id}, Title: ${contentList.title}`);
  }
}

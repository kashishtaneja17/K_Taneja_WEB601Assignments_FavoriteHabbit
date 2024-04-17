import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contentlist } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: Contentlist = new Contentlist();

  constructor(){
    this.contentList.addContent({
      id: 1,
      title: "Photography",
      description: "Capturing moments, emotions, and scenes through the lens of a camera, turning them into lasting memories.",
      creator: "Photographers",
      imgURL: "https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg",
      type: "Hobby",
      tags: ["Photography", "Camera", "Memories"]
    });
    this.contentList.addContent({
      id: 2,
      title: "Gardening",
      description: "Nurturing plants and flowers, creating beautiful landscapes, and enjoying the tranquility of nature in your own backyard.",
      creator: "Gardeners",
      imgURL: "https://i.cbc.ca/1.6293028.1684521050!/cumulusImage/httpImage/image.jpg_gen/derivatives/16x9_780/woman-gardening.jpg",
      type: "Hobby",
      tags: ["Gardening", "Plants", "Nature"]
    });
    this.contentList.addContent({
      id: 3,
      title: "Traveling",
      description: "Exploring new places, cultures, and cuisines, broadening horizons and creating unforgettable experiences.",
      creator: "Travel Enthusiasts",
      imgURL: "https://www.pacificvoyagers.org/wp-content/uploads/2019/10/shutterstock_144112840.jpg",
      type: "Hobby",
      tags: ["Travel", "Adventure", "Culture"]
    });
  }
}
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm for form reset


import { FavoriteHabbitService } from '../services/favorite-habbit.service';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {
  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    imgURL: '',
    type: '',
    tags: [],
    id: 0
  };

  @Output() contentAdded: EventEmitter<Content> = new EventEmitter<Content>();
  
  // ViewChild decorator to get reference to the form
  @ViewChild('contentForm') contentForm!: NgForm;

  // contentForm: any;

constructor(private favoriteHabbitService: FavoriteHabbitService, private MessageService: MessageService) { }


  addContent() {
    this.favoriteHabbitService.addContent(this.newContent);{
      // Emit the newly added content
      //this.contentAdded.emit(addedContent);

      // Clear input fields and reset form
      this.clearForm();
    };
  }

  clearForm() {
    // Reset the form using the resetForm() method of the contentForm reference
    if (this.contentForm) {
      this.contentForm.resetForm();
    }

    // Clear input fields after adding content
    this.newContent = {
      title: '',
      description: '',
      creator: '',
      imgURL: '',
      type: '',
      tags: [],
      id:0
    };
  }
}

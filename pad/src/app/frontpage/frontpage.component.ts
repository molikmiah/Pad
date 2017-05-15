import { Component, OnInit } from '@angular/core';

declare var MediumEditor: any;

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var editor = new MediumEditor('.editable', {
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'strikethrough', 'anchor', 'image', 'quote']
      }
    });

    let allNotes = [];
    allNotes.push(new Note('First Note', 'This is a description...', 'The full contents goes here...'));
    allNotes.push(new Note('Second Note', 'This is a description...', 'The full contents goes here...'));
    allNotes.push(new Note('Third Note', 'This is a description...', 'The full contents goes here...'));
    allNotes.push(new Note('Forth Note', 'This is a description...', 'The full contents goes here...'));

    allNotes.forEach(note => {
      console.log(note);
    });
  }

}

class Note {

  readonly ID: string = this.IDGenerater();
  public attributes: any = {};
  private meta: any = {
    createdTS: this.timestamp(),
    isDeleted: false,
    private: false
  };

  constructor(title: string, description: string, content: string) {
    this.attributes['title'] = title;
    this.attributes['description'] = description;
    this.attributes['content'] = content;
  }

  private IDGenerater(): string {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  private timestamp(): number {
    return +new Date();
  }
}
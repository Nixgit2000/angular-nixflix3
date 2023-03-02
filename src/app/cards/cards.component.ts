import { Component } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class NgForExampleComponent {
    searchText: any;
    people: NgForExample[] = [
      { 
        "pic": 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        "name": "Harry Potter"
      },
      { 
        "pic": 'https://cdn.vox-cdn.com/thumbor/auY1OmUlT82AJJu4NXrY5_FAZys=/0x0:1200x675/1400x1400/filters:focal(600x338:601x339)/cdn.vox-cdn.com/uploads/chorus_asset/file/19979189/percy.jpg',
        "name": "Percy Jackson"
        
      },
      { 
        "pic": 'https://www.giantbomb.com/a/uploads/square_medium/3/39164/1245387-untitled_1.png',
        "name": "Frodo Baggins"
        
      },
      { 
        "pic": 'https://compote.slate.com/images/caea051b-1b22-4680-9b12-e716ab29b3a0.png?crop=250%2C334%2Cx0%2Cy0',
        "name": "Mario"
        
      },      { 
        "pic": 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        "name": "Harry Potter"
      },
      { 
        "pic": 'https://www.giantbomb.com/a/uploads/square_medium/3/39164/1245387-untitled_1.png',
        "name": "Frodo Baggins"
        
      },
      { 
        "pic": 'https://compote.slate.com/images/caea051b-1b22-4680-9b12-e716ab29b3a0.png?crop=250%2C334%2Cx0%2Cy0',
        "name": "Mario"
        
      },      { 
        "pic": 'https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg',
        "name": "Harry Potter"

      }
    ];
  }
  interface NgForExample {
    "pic": string,
    "name": string
  }
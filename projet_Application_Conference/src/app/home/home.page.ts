import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'defaut debut de text';

  onChangeText() {
    this.text = 'change';
  }
  constructor() {}
}
// import { Component, OnInit } from '@angular/core';
// import { SpeakerService } from '../speaker.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.page.html',
//   styleUrls: ['./home.page.scss'],
// })
// export class HomePage implements OnInit {
//   speakers!: any[];

//   constructor(private speakerService: SpeakerService) {}

//   ngOnInit() {
//     this.speakerService.getSpeakers().subscribe((data) => {
//       this.speakers = data;
//     });
//   }
// }

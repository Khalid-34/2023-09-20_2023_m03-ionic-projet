import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-presentateurs',
  templateUrl: './presentateurs.component.html',
  styleUrls: ['./presentateurs.component.scss'],
})
export class PresentateursComponent implements OnInit {
  speakers!: any[];

  constructor(private speakerService: SpeakerService) {}

  ngOnInit() {
    this.speakerService.getSpeakers().subscribe((data) => {
      this.speakers = Object.values(data);
    });
  }
}

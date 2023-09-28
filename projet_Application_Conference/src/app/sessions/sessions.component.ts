import { Component, OnInit } from '@angular/core';
import { SpeakerService } from '../speaker.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  sessions!: any[];

  constructor(private speakerService: SpeakerService) {}

  ngOnInit() {
    this.speakerService.getSpeakers().subscribe((data) => {
      this.sessions = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.scss'],
})
export class SessionsComponent implements OnInit {
  sessions!: any[];

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.sessionService.getSession().subscribe((data) => {
      this.sessions = Object.values(data);
    });
  }
}

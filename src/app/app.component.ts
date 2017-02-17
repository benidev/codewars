import { Component } from '@angular/core';

@Component({
  selector: 'cwa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Code Wars'; 
  result = '';
  highscore = 0;
  games = 0;

  fight() {
    const randResult = Math.floor((Math.random() * 3) + 1);
    this.games++;
    switch(randResult) {
      case 1:
        this.result = 'you won!';
        this.highscore++;
        break;
      case 2:
        this.result = 'you lost';
        this.highscore--;
        if(this.highscore < 1) {
          this.result = 'game over';
          this.games = 0;
        }
        break;
      default:
        this.result = 'tie game';
    }
  }
}

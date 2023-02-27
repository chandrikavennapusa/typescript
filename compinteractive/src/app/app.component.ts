import { Component ,OnInit} from '@angular/core';
import { usernames } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'compinteractive';
 constructor(private names:usernames){}
 
 
}

import { Component } from '@angular/core';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
}

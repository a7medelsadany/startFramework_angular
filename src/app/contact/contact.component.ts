import { Component } from '@angular/core';
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-contact',
  imports: [AboutComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}

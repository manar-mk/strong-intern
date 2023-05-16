import {Component} from '@angular/core';

interface FooterInfo {
  title: string,
  texts: string[]
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerInfoData: FooterInfo[] = [
    {
      title: 'Navigation',
      texts: [
        'Home',
        'FAQ',
        'Investor Relations',
        'Jobs',
        'About Us',
        'Help Centre'
      ]
    },
    {
      title: 'legal',
      texts: [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Preferences',
        'Corporate Information'
      ]
    },
    {
      title: 'talk to us',
      texts: [
        'support@ercom.com',
        '+66 2399 1145'
      ]
    },
    {
      title: 'follow us',
      texts: [
        'Facebook%20Icon.png',
        'Linkedin%20Icon.png',
        'Twitter%20Icon.png'
      ]
    }
  ];
}

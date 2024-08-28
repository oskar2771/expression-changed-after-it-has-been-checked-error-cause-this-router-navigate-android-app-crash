import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage implements OnInit, AfterContentChecked {
  gestore = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.confighome();
  }
  ngAfterContentChecked() {
    this.confighome();
  }

  ionViewWillEnter() {
    this.confighome();
  }

  confighome() {
    try {
      const json = localStorage.getItem('currentUser');
      if (json && json !== 'null') {
        this.gestore = true;
        // Continue with the current user logic
      } else {
        this.gestore = false;
        //this.router.navigate(['/login']); This will cause app to crash
      }
    } catch (e) {
      console.log(e);
    }
  }
}

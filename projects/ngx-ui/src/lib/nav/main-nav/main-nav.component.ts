import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'digit-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  @Input() fullName = '';
  
  @Input() menu: { 
    main: {label: string, path: string}[],
    setting: {label: string, path: string}[]
  } = { main: [], setting: []};

  @Output() logout = new EventEmitter();

  currentMenu: {label: string, path: string}[] = [];
  activeMenu: 'main' | 'setting' = 'main';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentMenu = this.menu[this.activeMenu];
  }

  toggleMenu() {
    if (this.activeMenu === 'main') this.activeMenu = 'setting';
    else this.activeMenu = 'main';
    this.currentMenu = this.menu[this.activeMenu];
    this.router.navigate([this.currentMenu[0].path]);
  }

  logoutHandler() {
    this.logout.emit();
  }

}

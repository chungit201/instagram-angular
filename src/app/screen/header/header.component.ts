import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public bgColor?: string;

  constructor() {}

  ngOnInit(): void {
    if (this.getBgColor()) {
      this.bgColor = this.getBgColor();
    } else {
      this.bgColor = 'light';
    }
  }

  changeBgColor(themeKey: any) {
    this.bgColor = themeKey;
    this.setBgColor();
    const color = this.getBgColor();
    if (color != 'dark') {
      this.bgColor = 'dark';
    } else {
      this.bgColor = 'light';
    }
    this.setBgColor();
    if (themeKey == 'dark') {
      document.documentElement.classList.add('darkTheme');
    } else {
      document.documentElement.classList.remove('darkTheme');
    }
  }

  setBgColor() {
    localStorage.setItem('theme', `${this.bgColor}`);
  }
  getBgColor(): string {
    return localStorage.getItem('theme')!;
  }

  //Open Post Form
  openPostForm() {
    let modal: any = document.getElementById('myModal');
    let close: any = document.getElementsByClassName('close')[0];

    modal.style.display = 'block';

    close.onclick = function () {
      modal.style.display = 'none';
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  }

  //Open Account Dropdown Menu
  menuToggle() {
    const toggleMenu: any = document.querySelector('.profile-button__menu');
    toggleMenu.classList.toggle('active');
  }
}

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
    this.getButtonStory();
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

  getButtonStory(): void {
    const storiesLeftButton = document.querySelector('.stories__left-button');
    const storiesRightButton = document.querySelector('.stories__right-button');
    const storiesContent = document.querySelector('.stories__content');
    this.storiesLeftButton(storiesLeftButton, storiesContent);
    this.storiesRightButton(storiesRightButton, storiesContent);
    this.checkScreenStory(
      storiesLeftButton,
      storiesRightButton,
      storiesContent
    );
  }
  storiesLeftButton(btnStory: any, strContent: any): void {
    btnStory.addEventListener('click', () => {
      strContent.scrollLeft -= 320;
    });
  }

  storiesRightButton(btnStory: any, strContent: any): void {
    btnStory.addEventListener('click', () => {
      strContent.scrollLeft += 320;
    });
  }

  checkScreenStory(btnStrLeft: any, btnStrRight: any, strContent: any): void {
    if (window.matchMedia('(min-width: 1024px)').matches) {
      // Observer to hide buttons when necessary
      const storiesObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach((entry) => {
            if (entry.target === document.querySelector('.story:first-child')) {
              btnStrLeft.style.display = entry.isIntersecting
                ? 'none'
                : 'unset';
            } else if (
              entry.target === document.querySelector('.story:last-child')
            ) {
              btnStrRight.style.display = entry.isIntersecting
                ? 'none'
                : 'unset';
            }
          });
        },
        { root: strContent, threshold: 1 }
      );

      // Calling the observer with the first and last stories
      storiesObserver.observe(document.querySelector('.story:first-child')!);
      storiesObserver.observe(document.querySelector('.story:last-child')!);
    }
  }

  //Open Post Form
  openPostForm(){
    let modal: any = document.getElementById("myModal");
    let close: any = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    close.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
    }
  }
}

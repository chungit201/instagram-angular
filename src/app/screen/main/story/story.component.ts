import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getButtonStory();
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
    if (!btnStory) return;
    btnStory.addEventListener('click', () => {
      strContent.scrollLeft -= 320;
    });
  }

  storiesRightButton(btnStory: any, strContent: any): void {
    if (!btnStory) return;
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
}

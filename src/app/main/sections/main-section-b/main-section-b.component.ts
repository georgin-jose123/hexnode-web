import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section-b',
  templateUrl: './main-section-b.component.html',
  styleUrls: ['./main-section-b.component.scss']
})
export class MainSectionBComponent implements OnInit, OnDestroy {
  isTrueBoolean: boolean = false
  menuName:string="animationContent1"
  ngOnInit(): void {
    const accordion = document.querySelectorAll('.acc-header')
    accordion.forEach(function(acc) {
      acc.addEventListener("click", function () {
        if (acc.classList.contains("active")) {
          acc.classList.remove("active")
        } else {
          acc.classList.add("active")
        }
      })
    })

    const animation = document.querySelectorAll('.header-text-div')
    animation.forEach(function(anima) {
      anima.addEventListener("click", function () {
        if (anima.classList.contains("animation-active")) {
          // anima.classList.remove("active")
        }  else {
          const contentIsOpen = document.querySelectorAll(".animation-active")
          contentIsOpen.forEach(function(isContent) {
            isContent.classList.remove("animation-active")
          })
          anima.classList.add("animation-active")
        }
      })
    })
  }

  onClick() {
    debugger
    this.isTrueBoolean = !this.isTrueBoolean;
  }
  ngOnDestroy(): void {

  }
}

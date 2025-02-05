import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-section-c',
  templateUrl: './main-section-c.component.html',
  styleUrls: ['./main-section-c.component.scss']
})
export class MainSectionCComponent implements OnInit,OnDestroy{
  contentDiv:string ="contentDiv1"
ngOnInit(): void {
  const accordion = document.querySelectorAll('.content-div')
  accordion.forEach(function(content) {
    content.addEventListener("click", function () {
      if (content.classList.contains("active")) {
        // content.classList.remove("active")
      } else {
        const contentIsOpen =document.querySelectorAll(".active")
        contentIsOpen.forEach(function(isContent) {
          isContent.classList.remove("active")
        })
        content.classList.add("active")
      }
    })
  })
}
ngOnDestroy(): void {
  
}
}

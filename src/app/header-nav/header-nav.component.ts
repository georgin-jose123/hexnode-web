import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit,OnDestroy {
  overlay:boolean=false
ngOnInit(): void {
}
showSideBar(){
 const ele = document.querySelector('.sidebar') as HTMLElement;
 this.overlay=true
 ele.style.display = "block"

}
hideSideBar(){
  this.overlay=false
 const ele = document.querySelector('.sidebar') as HTMLElement;
 ele.style.display = "none"
}
ngOnDestroy(): void {
  
}
}

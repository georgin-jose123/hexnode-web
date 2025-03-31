import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit,OnDestroy {
  overlay:boolean=false
ngOnInit(): void {


  window.addEventListener('resize', this.handleResize);

}
handleResize = () => {
  const ele = document.querySelector('.sidebar') as HTMLElement;
  if (window.innerWidth >= 1280) {
    ele.style.display = "none";
    document.body.style.overflow = "auto";
    this.overlay = false; // This should now correctly set the overlay to false
  }
}
showSideBar(){
 const ele = document.querySelector('.sidebar') as HTMLElement;
 this.overlay = true;
 ele.style.display = "block";
 document.body.style.overflow = "hidden";
 

}
hideSideBar(){
  this.overlay = false;
 const ele = document.querySelector('.sidebar') as HTMLElement;
 ele.style.display = "none";
document.body.style.overflow = "auto";
}
ngOnDestroy(): void {
  window.removeEventListener('resize', this.handleResize);
}
}

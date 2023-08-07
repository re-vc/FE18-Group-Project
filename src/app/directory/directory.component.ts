import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { alumnis } from '../alumni-details/alumnis';
import { IAlumni } from '../alumni-details/IAlumni';
import $ from 'jquery';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  alumniList: IAlumni[] = [];
  isReverse: boolean = false;

  ngOnInit(): void {
    this.loadAlumnis();

    $(document).ready(function() {
       $( ".card" ).hover(
       function() {
        $(this).removeClass('shadow-lg');
        $(this).addClass('border1');
      }, function() {
        $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
        $(this).removeClass('border1');
       }
     );
       
     // document ready  
     });


  }


  loadAlumnis() {
    this.alumniList = alumnis;
  }

  sortByID() {
    if (this.alumniList.length < 2) return;
    this.alumniList.sort((a,b) => a.id - b.id);
    if (this.isReverse){
      this.alumniList.reverse();
    }
  }
  sortByName() {
    if (this.alumniList.length < 2) return;
    this.alumniList.sort((a, b) => a.name.localeCompare(b.name));
    if (this.isReverse){
      this.alumniList.reverse();
    }
  }

  reverseSelection(){
    this.alumniList.reverse();
    this.isReverse = !this.isReverse;
  }


}

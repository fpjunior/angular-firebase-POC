import { Component, OnInit, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
  items2!: MenuItem[];
  @Output() onVisibleSidebar = new EventEmitter<boolean>(false);
  @Input() visibleSidebar = false;

  constructor(
    private router: Router,
    public afs: AngularFirestore

    ) {

   }

  ngOnInit() {
  }

}

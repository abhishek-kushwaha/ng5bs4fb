import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  coursesObservable: Observable<any[]>;

  constructor(private _db: AngularFireDatabase) { }

  ngOnInit() {
    this.coursesObservable = this.getCourses('/courses');
  }

  getCourses(listPath): Observable<any[]>{
    return this._db.list(listPath).valueChanges()
  }

}

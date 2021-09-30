import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/api.service';
import { Glover } from './models/glover';
import { GloversListResponse } from './models/glovers-list-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'empty-project';

  public gloversList: Glover[] = [];

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getGloverList();
  }

  getGloverList() {
    this.api.getAllGlovers().subscribe(result => {
      this.gloversList = [];

      for (let key of Object.keys(result)) {
        this.gloversList
          .push({
            id: +key,
            name: result[key].name
          });
      }

    });
  }

  public newGloverCallback(newGloverName: string): void {
    this.api.addNewGlover(newGloverName).subscribe(result => {
      if (result.status == "ok") {
        this.getGloverList();
      } else {
        // print error
      }
    });
  }

  public gloverRemovedCallback(removedGloverId: number): void {
    this.api.removeGlover(removedGloverId).subscribe(result => {
      if (result.status == "ok") {
        this.getGloverList();
      } else {
        // print error
      }
    });
  }
}

import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class SearchPostService {
    searchQuery = new BehaviorSubject<string>('');
    constructor(){}
 
updateSearchQuery(searchQuery: string) {
    this.searchQuery.next(searchQuery);
}

}



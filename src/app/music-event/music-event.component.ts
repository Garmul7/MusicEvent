import { Component, OnInit } from '@angular/core';
import { MusicEvent } from './music-event.model';
import {MusicEventService} from './music-event.service';

@Component({
  selector: 'app-music-event',
  templateUrl: './music-event.component.html',
  styleUrls: ['./music-event.component.css'],
  providers: [MusicEventService]
})
export class MusicEventComponent implements OnInit {
musicEventList: MusicEvent[];
filteredEventList: MusicEvent[];
  constructor(private musicEventService: MusicEventService) {}

  ngOnInit(): void {
    this.getMusicEvents();
  }

  // Get the whole list of Events
  getMusicEvents(): void {
    this.musicEventService.getMusicEvents()
      .subscribe(musicEventList => this.musicEventList = musicEventList);
    this.musicEventService.getMusicEvents()
      .subscribe(musicEventList => this.filteredEventList = musicEventList);
  }

  // Adding a new event
  add( eventtitle: string, eventdescription: string, eventcountry: string, eventcity: string,
       eventdate: string, eventprice: string, eventIsActive: boolean, eventPeople: string[] ): void {
    this.musicEventService.addMusicEvent({ eventtitle, eventdescription, eventcountry, eventcity,
      eventdate, eventprice, eventIsActive, eventPeople } as MusicEvent )
      .subscribe(musicEvent => { this.musicEventList.push(musicEvent); },
      error1 => {},
      () => {},
    );
  }

  // Changes if event is active
  changeEventActivity(musicEvent: MusicEvent): void {
    let newMusicEvent: MusicEvent;
    newMusicEvent = musicEvent;
    if ( musicEvent.eventIsActive ) {
      newMusicEvent.eventIsActive = false;
    }
    else {
      newMusicEvent.eventIsActive = true;
    }
    this.musicEventService.changeMusicEvent(musicEvent, newMusicEvent).subscribe();
  }


  // SORTING AND FILTERING THE EVENT LIST
  sortByPriceDec(): void {
    this.musicEventList = this.musicEventList.sort((a: MusicEvent, b: MusicEvent) => Number(b.eventprice) - Number(a.eventprice));
  }

  sortByDateDec(): void {
    this.musicEventList = this.musicEventList.sort((a: MusicEvent, b: MusicEvent) => Date.parse(b.eventdate) - Date.parse(a.eventdate));
  }
  sortByPriceInc(): void {
    this.musicEventList = this.musicEventList.sort((a: MusicEvent, b: MusicEvent) => Number(a.eventprice) - Number(b.eventprice));
  }

  sortByDateInc(): void {
    this.musicEventList = this.musicEventList.sort((a: MusicEvent, b: MusicEvent) => Date.parse(a.eventdate) - Date.parse(b.eventdate));
  }


  applySort(typeOfSorting: string, minval: number, maxval: number, mindate: string, maxdate: string): void {
    if ( typeOfSorting === 'pricedec' ) {
      this.sortByPriceDec();
    }
    if ( typeOfSorting === 'priceinc' ) {
      this.sortByPriceInc();
    }
    if ( typeOfSorting === 'datedec' ) {
      this.sortByDateDec();
    }
    if ( typeOfSorting === 'dateinc' ) {
      this.sortByDateInc();
    }

    this.filteredEventList = this.musicEventList;
    if ( maxval ){
      this.filteredEventList = this.filteredEventList.filter(function(musicEvent) {
        return Number(musicEvent.eventprice) <= maxval;
        });
      }
    if ( minval ) {
        this.filteredEventList = this.filteredEventList.filter(function(musicEvent) {
          return Number(musicEvent.eventprice) >= minval;
        });
      }
    if ( mindate ) {
        this.filteredEventList = this.filteredEventList.filter(function(musicEvent) {
          return Date.parse(musicEvent.eventdate) >= Date.parse(mindate);
        });
      }
    if ( maxdate ) {
      this.filteredEventList = this.filteredEventList.filter(function(musicEvent) {
        return Date.parse(musicEvent.eventdate) <= Date.parse(maxdate);
        });
    }
  }
}

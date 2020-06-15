export class MusicEvent {
  id: number;
  eventtitle: string;
  eventdescription: string;
  eventcountry: string;
  eventcity: string;
  eventdate: string;
  eventprice: string;
  eventIsActive: boolean;
  eventPeople: string[];

  constructor(eventtitle: string, eventdescription: string,
              eventcountry: string, eventcity: string,
              eventdate: string, eventprice: string,
              eventIsActive: boolean, eventPeople: string[]) {
this.eventtitle = eventtitle;
this.eventdescription = eventdescription;
this.eventcountry = eventcountry;
this.eventcity = eventcity;
this.eventdate = eventdate;
this.eventprice = eventprice;
this.eventIsActive = eventIsActive;
this.eventPeople = eventPeople;
  }

}

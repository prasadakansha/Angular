import { Component, OnInit } from '@angular/core';
import { DummydataService } from '../service/dummydata.service';
import { Appointment } from '../model/appointment';
import { Center } from '../model/center';

@Component({
  selector: 'app-approve-appointment',
  templateUrl: './approve-appointment.component.html',
  styleUrls: ['./approve-appointment.component.css']
})
export class ApproveAppointmentComponent implements OnInit {

  service:DummydataService;
  appointments:Array<Appointment>=[];
  centers:Array<Center>=[];
  showappointments:Array<Appointment>=[];
  centerName:String;

  constructor(service:DummydataService) {
      this.service = service;
   }

  ngOnInit(): void {
    this.centers = this.service.getDummyData();
    this.appointments = this.service.fetchAppointments();
  }

  getAppointments(event){
    this.showappointments=[];
      let centerId = event.target.value;
      this.appointments.forEach(a => {
        if(a.center.id == centerId && a.status == false)
        {
          this.centerName = a.center.name;
          this.showappointments.push(a);
        }
      });
  }

  approve(Id){
    let id = Id.value;
    this.appointments.forEach(a => {
      if(a.id == id)
      {
        a.status = true;
      }
    });
  }

}

import { AfterViewInit, Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyDet } from './shared/models/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  dets:MyDet[]=[
    {id: 1, name: 'Something 1', status: this.makeStatus()},
    {id: 2, name: 'Something 2', status: this.makeStatus()},
    {id: 3, name: 'Something 3', status: this.makeStatus()},
    {id: 4, name: 'Something 4', status: this.makeStatus()},
    {id: 5, name: 'Something 5', status: this.makeStatus()},
    {id: 6, name: 'Something 6', status: this.makeStatus()},
    {id: 7, name: 'Something 7', status: this.makeStatus()},
    {id: 8, name: 'Something 8', status: this.makeStatus()},
    {id: 9, name: 'Something 9', status: this.makeStatus()},
    {id: 10, name: 'Something 10', status: this.makeStatus()}
];


  makeStatus(){
    let rand=Math.random();
    if (rand>0.5){
      return true;
    }
    else{
      return false;
    }
  } 
  
  addDet(inputCard){
    let lengthDets=(Object.keys(this.dets).length);
    let endDets;
    if (lengthDets>=1){
      endDets=this.dets[lengthDets-1].id;
      console.log(endDets);
    } 
    else {
      endDets=0;
    }

    this.dets.push({id: endDets + 1, name: inputCard, status: this.makeStatus()})
  }


  
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faIcons, faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';



@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  public faTrashAlt = faTrashAlt;
  public faEdit = faEdit;
  public prestationS: PrestationsService;
  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor(private prestationService: PrestationsService) { }

  ngOnInit() {
  }

   // delete() {
  //   this.prestationS.delete();
  // }

  public edit() {
    this.action.emit('edit');
  }

  public delete() {
    this.action.emit('delete');
  }


}

import { Component } from '@angular/core';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PhoneBook';


  addContact()
  {
          console.log(this.phb.name);
          this.phoneArray.push({name :this.phb.name,phoneNumber : this.phb.phoneNumber})

  }
  phoneArray : PhoneBook []=[
    {name : "Nakul",phoneNumber : 12547812},
    {name : "Yash",phoneNumber : 123546},
    {name : "Tejas",phoneNumber : 124740556},{name : "Nikhil",phoneNumber : 125447812},
    {name : "Amey",phoneNumber : 1245752114},
    {name : "Mohit",phoneNumber : 45321452},

  ]
  deleteContact(ph : PhoneBook)
  {
     console.log(ph.phoneNumber);
     for(var i = 0; i < this.phoneArray.length; i++) {
      if(this.phoneArray[i].name == ph.name) {
          this.phoneArray.splice(i, 1);
          break;
      }

  }
}

  closeResult: string|undefined;

  constructor(private modalService: NgbModal) {
    this.phoneArray.sort((a : any, b : any) => (a.name > b.name ? 1 : -1));
  }

  open(content : any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 phb : PhoneBook =new PhoneBook();

}

class PhoneBook{
    name : String | undefined;
    phoneNumber : number | undefined;
}

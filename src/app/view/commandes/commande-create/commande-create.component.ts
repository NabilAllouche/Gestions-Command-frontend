
import { Component } from '@angular/core';
import {CommandeService} from "src/app/controler/service/commande.service";
import {Commande} from "../../../controler/model/commande.model";

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent {


  constructor( private commandeService: CommandeService ) {
  }


   public save(): void{
    this.commandeService.save().subscribe(data => {
      if (data != null) {
        this.commandes.push({...this.commande}) ;
        this.commandeService.commande == null ;
        alert('SAVE SUCCESS')
      } else {
        alert('SAVE ERROR :: REF EXIST')
      }
        }
    )

   }



  get commande(): Commande {
    if (this.commandeService.commande == null) {
      // @ts-ignore
      this.commandeService.commande = new Commande();
    }
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }

  get commandes(): Array<Commande> {
    if (this.commandeService.commandes == null) {
      this.commandeService.commandes = new Array<Commande>();
    }
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }


}

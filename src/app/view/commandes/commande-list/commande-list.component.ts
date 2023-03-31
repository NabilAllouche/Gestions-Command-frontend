import {Component, OnInit} from '@angular/core';
import {Commande} from "../../../controler/model/commande.model";
import {CommandeService} from "../../../controler/service/commande.service";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit{

  constructor( private commandeService: CommandeService ) {
  }

  ngOnInit(){
    this.findAll();
  }

  public findAll(): void{
    this.commandeService.finAll().subscribe( data => {
      this.commandes = data;
      console.log(this.commandes);
    })
  }

  get commande(): Commande {
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }

  get commandes(): Array<Commande> {
    return this.commandeService.commandes;
  }

  set commandes(value: Array<Commande>) {
    this.commandeService.commandes = value;
  }



}

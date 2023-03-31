import {Component, OnInit} from '@angular/core';
import {Commande} from "../../../controler/model/commande.model";
import {CommandeService} from "../../../controler/service/commande.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-commande-list',
  templateUrl: './commande-list.component.html',
  styleUrls: ['./commande-list.component.css']
})
export class CommandeListComponent implements OnInit{
  private index!: number;

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

  public deleteByReference(commande : Commande, index : number ){
    this.commandeService.deleteByReference(commande.reference).subscribe(data => {
      this.commandes.splice(index,1) ;
         }
    );

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

import {createEnvironmentInjector, Injectable, makeEnvironmentProviders} from '@angular/core';
import {Commande} from "../model/commande.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private _commande!: Commande;
  private _commandes!: Array<Commande>;
  private _url = 'http://localhost:8036/api/v1/commande/'

  public save(): Observable<Commande> {
    return this.http.post<Commande>(this._url, this._commande)
  }
  public deleteByReference(reference : string): Observable<Commande> {
    return this.http.delete<Commande>(this._url + 'reference/' +reference)
  }
  public finAll(): Observable<Array<Commande>> {
    return this.http.get<Array<Commande>>(this._url + 'findAll/')
  }

  // @ts-ignore
  constructor(private http: HttpClient) {
  }


  get commande(): Commande {
    if (this._commande == null) {
      this._commande = new Commande();
    }
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }

  get commandes(): Array<Commande> {
    if (this._commandes == null) {
      this._commandes = new Array<Commande>();
    }
    return this._commandes;
  }

  set commandes(value: Array<Commande>) {
    this._commandes = value;
  }
}

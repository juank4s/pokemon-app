import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalComponent } from 'src/components/modal/modal.component';
import { PokemonDetailModel } from 'src/models/pokemon/pokemon-detail';
import { PokemonModel } from 'src/models/pokemon/pokemon-model';
import { ApiRestProvider } from 'src/providers/api-rest/api-rest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokemon-app';
  pokemon = new PokemonModel();
  cont: number = 1;
  constructor(
    public apiService: ApiRestProvider,
    private spinnerService: NgxSpinnerService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.sendGetPokemon();
  }

  nextPokemon() {
    this.cont++;
    this.sendGetPokemon();
  }

  viewDetails(pokemon: PokemonModel) {
    this.sendGetDetailPokemon(pokemon);
  }

  previousPokemon() {
    this.cont--;
    if (this.cont <= 0) {
      Swal.fire({
        title: 'Error!',
        text: 'No more left pokemons',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    } else {
      this.sendGetPokemon();
    }
  }

  sendGetPokemon() {
    this.spinnerService.show();
    this.apiService
      .getModelWA('api/v1/pokemon/get-pokemons/'.concat(this.cont.toString()))
      .subscribe((result) => {
        this.spinnerService.hide();
        console.log(result);
        this.pokemon = result.response_body;
        console.log(this.pokemon);
      });
  }

  sendGetDetailPokemon(pokemonTo: PokemonModel) {
    this.spinnerService.show();
    this.apiService
      .getModelWA('api/v1/pokemon/get-pokemon-detail/'.concat(pokemonTo.id.toString()))
      .subscribe((result: any) => {
        this.spinnerService.hide();
        const modalRef = this.modalService.show(ModalComponent, {
          backdrop: false,
          ignoreBackdropClick: true,
          keyboard: false,
          class: 'modal-lg'
        })
        modalRef.content.pokemonDetail = result.response_body
      });
  }
}

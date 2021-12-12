import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { PokemonDetailModel } from 'src/models/pokemon/pokemon-detail';
import { PokemonModel } from 'src/models/pokemon/pokemon-model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  public pokemonDetail = new PokemonDetailModel();

  constructor(public modalService: BsModalService) {}

  ngOnInit(): void {
  }
}

import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PokemonModel } from 'src/models/pokemon/pokemon-model';
import { ApiRestProvider } from 'src/providers/api-rest/api-rest';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-app';
 pokemon=new PokemonModel();
 cont:number=1;
  constructor(public apiService: ApiRestProvider,private spinnerService: NgxSpinnerService) {
  }


  ngOnInit() {
this.sendGetPokemon();
  }

  //Metodo encargado de enviar la solicitud al servicio rest o mostrar mensajes de error si es el caso

  nextPokemon(){
    this.cont++;
    this.sendGetPokemon();
  }

  viewDetails(id:number){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )

    this.sendGetDetailPokemon(id.toString());
  }

  previousPokemon(){
    this.cont--;
    if(this.cont<=0){
      Swal.fire({
        title: 'Error!',
        text: 'No more left pokemons',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }else{
    this.sendGetPokemon();
    }
  }


  sendGetPokemon(){
    this.spinnerService.show();
    this.apiService.getModelWA("api/v1/pokemon/get-pokemons/".concat(this.cont.toString())).subscribe(result => {
      this.spinnerService.hide();
      console.log(result);
      this.pokemon=result.response_body;
      console.log(this.pokemon);
    
    })

  }

  sendGetDetailPokemon(id:string){
    this.spinnerService.show();
    this.apiService.getModelWA("api/v1/pokemon/get-pokemon-detail/".concat(id)).subscribe(result => {
      this.spinnerService.hide();
      console.log(result);
    
    })

  }
}



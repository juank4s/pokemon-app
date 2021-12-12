import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiRestProvider } from 'src/providers/api-rest/api-rest';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon-app';
  constructor(public apiService: ApiRestProvider,private spinnerService: NgxSpinnerService) {
  }


  ngOnInit() {
this.sendGetPokemon();
  }

  //Metodo encargado de enviar la solicitud al servicio rest o mostrar mensajes de error si es el caso




  sendGetPokemon(){
    this.spinnerService.show();
    this.apiService.getModelWA("api/v1/pokemon/get-pokemons/898").subscribe(result => {
      this.spinnerService.hide();
      console.log(result);
      if (result.session === '') {
        Swal.fire({
          title: 'Error!',
          text: 'Credenciales incorrectas',
          icon: 'error',
          confirmButtonText: 'Continuar'
        })
      } else {
        Swal.fire({
          title: 'Tu sesion es '.concat(result.session),
          width: 600,
          padding: '3em',
          background: '#fff',
          backdrop: `
            rgba(0,0,123,0.4)             
            left top
            no-repeat
          `
        })
      }
    })

  }
}



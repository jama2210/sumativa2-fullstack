import { Component } from "@angular/core";
import { carrusel } from "../../components/carrusel/carrusel";
import { cardhome } from "../../components/card-home/card-home";
import { RouterModule, RouterOutlet } from "@angular/router";
import { footer } from "../../components/footer/footer";
import { header } from "../../components/header/header";
@Component({
    selector: 'app-home',
    templateUrl: './home.html',
    imports: [RouterOutlet ,carrusel, cardhome, RouterModule, footer, header]
})

export class home {

}
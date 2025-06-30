import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { home } from "./pages/home/home";
import { header } from "./components/header/header";
import { footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, home, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Eimy";
}

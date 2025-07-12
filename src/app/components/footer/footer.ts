import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.html'
})

export class footer {
    constructor() { }

  ngOnInit(): void {
  }

  // ¡Aquí está la función que necesitas!
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
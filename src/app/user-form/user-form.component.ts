import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  public inputMessage: string = 'Ingresa tu nombre';
  public disableBt: boolean = true;
  public inputTxt: string = '';

  constructor() {
    setTimeout(() => {
      this.disableBt = false;
    }, 3000)
  }

  public clickEvt() {
    this.inputMessage = 'guardando Datos';
    setTimeout(() => {
      this.inputMessage = 'Ingresa tu nombre';
    }, 2000);
  }

  public txt(event: Event): void {
    const evt = event as InputEvent;
    this.inputTxt = this.inputTxt + evt.data;
  }
}

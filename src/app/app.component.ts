import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component'; // Importar el componente standalone

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true, // Si AppComponent también es standalone
  imports: [RegisterComponent] // Asegúrate de importar RegisterComponent aquí
})
export class AppComponent {
  title = 'registration-form';
}

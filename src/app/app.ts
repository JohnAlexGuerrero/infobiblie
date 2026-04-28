import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Siderbar } from "./layout/siderbar/siderbar";
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Siderbar, Navbar
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('studybiblie');
}

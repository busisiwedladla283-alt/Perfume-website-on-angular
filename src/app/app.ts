import { Component } from '@angular/core';
import {  RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Featured } from './featured/featured';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer, Featured],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

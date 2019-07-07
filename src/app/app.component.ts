import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'mon-projet-angular';
  


  posts = [

  {

      title: 'ngClass',
      content: "Au-delà de modifier des styles directement, il peut être très utile d'ajouter des classes CSS à un élément de manière dynamique.  Comme  ngStyle ,  ngClass  prend un objet clé-valeur, mais cette fois avec la classe à appliquer en clé, et la condition en valeur.",
      loveIt : 5
      
   },
   {

      title: 'ngStyle',
      content: "Cette directive permet d'appliquer des styles à un objet du DOM de manière dynamique. Imaginez que, pour l'application des appareils électriques, vous souhaitiez modifier la couleur du texte selon si l'appareil est allumé ou non, disons vert pour allumé, rouge pour éteint.   ngStyle  vous permet de faire cela :",
      loveIt : -5
      
      
   },
   {

      title: 'ngFor',
      content: "Lorsque l'on ajoute la directive  *ngFor='let obj of myArray'  à un component, Angular itérera l'array  myArray  et affichera un component par objet  obj .  Pour en comprendre l'utilisation, je vous propose de modifier la façon dont votre application génère des appareils électriques.",
      loveIt : 0
      
   }

   ];




}

import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  evenements: Evenement[] = [
    new Evenement(
      "Année 3.000.000 avant notre ère - Apparition de l'Homme",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/evolution.jpg",
    ),
    new Evenement(
      "Année 7.000 avant notre ère - Les Premiers Villages",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/village.jpg",
    ),
    new Evenement(
      "Année 2.000 avant notre ère - La civilisation Sumérienne arrive à son apogée",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/sumer.jpg",
    ),
    new Evenement(
      "Année 800 avant notre ère - Naissance des cités Grecques",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/grece.jpg",
    ),
    new Evenement(
      "Année 332 avant notre ère - Conquêtes d'Alexandre le Grand",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/alexandre.jpg",
    ),
    new Evenement(
      "Année 58 avant notre ère - Conquête de la Gaule",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/gaule.jpg",
    ),
    new Evenement(
      "Années 793-1066 de notre ère - Age des Vikings",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/viking.jpg",
    ),
    new Evenement(
      "Années 1096-1272 de notre ère - Les Croisades",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/croisade.jpg",
    ),
    new Evenement(
      "Années 1429-1430 de notre ère - Epopée de Jeanne d'Arc",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/jeannedarc.jpg"
    ),
    new Evenement(
      "Année 1492 de notre ère - Découverte de l'Amérique",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/amerique.jpg"
    ),
    new Evenement(
      "Années 1715-1789 de notre ère - Le siècle des Lumières",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/lumiere.jpg"
    ),
    new Evenement(
      "Année 1789 de notre ère - La Révolution Française",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/revolution.jpg"
    ),
    new Evenement(
      "Années 1861-1865 de notre ère - Guerre de Sécession",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/secession.jpg"
    ),
    new Evenement(
      "Années 1939-1945 de notre ère - Seconde guerre mondiale",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/sgm.jpg"
    ),
    new Evenement(
      "Année 1991 de notre ère - Fin de la guerre froide",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/fgf.jpg",
    )

  ];

  selectedEvenement: Evenement;

  constructor() { 
    this.setSelectedEvenement(this.evenements[0]);
  }

  // récup les evenements
  getEvenements(): Evenement[] {
    return this.evenements;
  }

  // modif les evenements selectionné
  setSelectedEvenement(evenement: Evenement): void {
    this.selectedEvenement = evenement;
  }

  // recup l'evenement selectionné
  getSelectedEvenement(): Evenement {
    return this.selectedEvenement;
  }
  
}

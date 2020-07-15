import { Injectable } from '@angular/core';
import { Invention } from '../model/invention';

@Injectable({
  providedIn: 'root'
})
export class InventionService {

  inventions: Invention[] = [
    new Invention(
      "400.000 ans avant notre ère - L'homme maitrise le Feu",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/feu.png",
    ),
    new Invention(
      "32.000 ans avant notre ère - Les premières Oeuvres d'Arts",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/peinturePrehistoire.jpg",
    ),
    new Invention(
      "9.000 ans avant notre ère - La fabrication de la Charrue",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/charrue.jpg",
    ),
    new Invention(
      "3.500 ans avant notre ère - Les premières écritures Cunéiformes",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/cuneiforme.jpg",
    ),
    new Invention(
      "2.000 ans avant notre ère - Invention du Char",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/char.jpg",
    ),
    new Invention(
      "470 ans avant notre ère - Invention de la Voute",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/voute.jpg",
    ),
    new Invention(
      "L'an 618 de notre ère - Invention des bases de l'Imprimerie",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/imprimante.JPG",
    ),
    new Invention(
      "L'an 1040 de notre ère - Invention de la Boussole",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/boussole.jpg",
    ),
    new Invention(
      "L'an 1259 de notre ère - Invention du Canon",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/canon.jpg"
    ),
    new Invention(
      "L'an 1500 de notre ère - Invention du Char d'Assaut",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/charAssaut.jpg",
    ),
    new Invention(
      "L'an 1590 de notre ère - Invention du Microscope",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/microscope.jpg"
    ),
    new Invention(
      "L'an 1642 de notre ère - Invention de la Machine à Calculer",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/calcul.jpg",
    ),
    new Invention(
      "L'an 1776 de notre ère - Premier Chemin de Fer",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/cheminFer.jpg",
    ),
    new Invention(
      "L'an 1826 de notre ère - Première Photographie",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/photographie.jpg",
    ),
    new Invention(
      "L'an 1879 de notre ère - Invention de l'Ampoule à Incandescence",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/ampoule.jpg",
    ),
    new Invention(
      "L'an 2003 de notre ère - La Nanotechnologie",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor erat sed lacinia tristique. Etiam eu nibh vehicula, cursus ipsum vel, efficitur quam. In cursus magna erat, in dictum nibh mattis nec. Duis a pulvinar turpis. Suspendisse vehicula, justo tincidunt fermentum scelerisque, erat erat ullamcorper nulla, at semper odio nibh vel tellus. Ut tristique facilisis tortor, id sagittis sapien pharetra pellentesque. Maecenas nec augue iaculis, interdum dolor in, finibus quam. Nam faucibus, enim ut convallis pellentesque, dui eros imperdiet diam, vitae lacinia mauris arcu in orci. Duis pretium id magna ac egestas.",
      "assets/img/ironman.jfif",
    )
  ];

  selectedInvention: Invention;
  detailInvention: Invention;

  constructor() {
    this.setSelectedInvention(this.inventions[0]);
   }

   // récup les inventions
   getInventions(): Invention[] {
     return this.inventions;
   }

   // modif les inventions selectionné
   setSelectedInvention(invention: Invention): void {
     this.selectedInvention = invention;
   }

   // recup l'invention selectionné
   getSelectedInvention(): Invention {
     return this.selectedInvention;
   }

   // recup les détails de l'invention
   getDetailInvention(): Invention {
    return this.detailInvention;
  }
}

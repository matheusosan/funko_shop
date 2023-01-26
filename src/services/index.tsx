import { IFunkos } from "@/types";
import batman from '../assets/images/shoppingCart/batman.jpg'
import naruto from '../assets/images/shoppingCart/naruto.jpg'
import naruto2 from '../assets/images/shoppingCart/naruto2.jpg'
import naruto3 from '../assets/images/shoppingCart/naruto3.jpg'
import harry from '../assets/images/shoppingCart/harry-potter.jpg'
import chucky from '../assets/images/shoppingCart/chucky.jpg'
import godfather from '../assets/images/shoppingCart/godfather.jpg'
import lilo from '../assets/images/shoppingCart/lilo.jpg'
import thor from '../assets/images/shoppingCart/thor.jpg'
import anthony from '../assets/images/shoppingCart/anthony-davis.jpg'
import tobi from '../assets/images/shoppingCart/tobi.jpg'
import evilStrange from '../assets/images/shoppingCart/evil-strange.jpg'
import sasuke from '../assets/images/shoppingCart/sasuke.jpg'
import charizard from '../assets/images/shoppingCart/charizard.jpg'



const funkos: IFunkos[] = [
    {
      id: 1,
      title:
        "Funko Boneco de vinil do Batman Pop!",
      price: 10.99,
      images: {
        icon1: `${batman.src}`
      },
    },
    {
      id: 2,
      title: "Funko Pop 932 Naruto Six Path Sage",
      price: 30.99,
      images: {
        icon1: `${naruto.src}`,
        icon2: `${naruto2.src}`,
        icon3: `${naruto3.src}`
      },
    },
    {
      id: 3,
      title: "Pop Funko 132 Harry W/The Stone Harry Potter",
      price: 20.99,
      images: {
        icon1: `${harry.src}`
      },
    },
    {
      id: 4,
      title: "Pop Bride of Chucky Chucky Vinyl",
      price: 20.99,
      images: {
        icon1: `${chucky.src}`
      },
    },
    {
      id: 5,
      title: "Pop Godfather Vito Corleone Vinyl",
      price: 20.99,
      images: {
        icon1: `${godfather.src}`
      },
    },
    {
      id: 6,
      title: "Funko Pop 1047 Lilo & Stitch Lilo W/Pudge",
      price: 20.99,
      images: {
        icon1: `${lilo.src}`
      },
    },
    {
      id: 7,
      title: "Pop Thor Love and Thunder Thor Vinyl",
      price: 20.99,
      images: {
        icon1: `${thor.src}`
      },
    },
    {
      id: 8,
      title: "Funko POP! Anthony Davis - NBA #120",
      price: 20.99,
      images: {
        icon1: `${anthony.src}`
      },
    },
    {
      id: 9,
      title: "Funko Pop Anime: Naruto: Shippuden - Tobi #184",
      price: 20.99,
      images: {
        icon1: `${tobi.src}`
      },
    },
    {
      id: 10,
      title: "Pop Doctor Strange Multiverse of Madness Dead Strange",
      price: 20.99,
      images: {
        icon1: `${evilStrange.src}`
      },
    },
    {
      id: 11,
      title: "Funko, SASUKE MARKS 35525",
      price: 20.99,
      images: {
        icon1: `${sasuke.src}`
      },
    },
    {
      id: 12,
      title: "Pop Pokemon Charizard Vinyl",
      price: 20.99,
      images: {
        icon1: `${charizard.src}`
      },
    },
  ];

export default funkos
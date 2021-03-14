import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { Image, ImagesRatio } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  images: Image[] = [
    {
      title: 'Image 1',
      description: 'Byla jsem také přítomná na slavnostním večeru mezi – vašimi slovy – ,snobskou sebrankou‘. S radostí a hrdá na práci kolegů jsem předávala hlavní cenu pro nejlepšího herce Ivanu Trojanovi za film Šarlatán. My, ve vašich očích šašci a klauni, jsme od nepaměti měli za úkol nastavovat mocným zrcadlo. ',
      thumbnail: 'image1',
      url: 'assets/images/1.jpg',
      id: 1,
      favorite: true,
    }, {
      title: 'Image 2',
      description: 'Svým vystoupením podle BBC nesla podobný vzkaz, jako se linul celým ceremoniálem. „Moje děti můžou jít do Zary, ale ne do kina. To je nepochopitelné,” řekl například scénárista Stephane Demoustier, když přebíral cenu.',
      thumbnail: 'image2',
      url: 'assets/images/2.jpg',
      id: 2,
      favorite: false,
    },
    {
      title: 'Image 3',
      description: 'Ceremoniál se odehrál bez přítomnosti diváků. Hlavní cenu si odnesl film Adieu Les Cons.',
      thumbnail: 'image3',
      url: 'assets/images/3.jpg',
      id: 3,
      favorite: false,
    },
    {
      title: 'Image 4',
      description: 'S radostí a hrdá na práci kolegů jsem předávala hlavní cenu pro nejlepšího herce Ivanu Trojanovi za film Šarlatán. My, ve vašich očích šašci a klauni, jsme od nepaměti měli za úkol nastavovat mocným zrcadlo. ',
      thumbnail: 'image4',
      url: 'assets/images/4.jpg',
      id: 4,
      favorite: true,
    },
    {
      title: 'Image 5',
      description: 'Kina ve Francii jsou zavřená už tři měsíce. Proti opatřením a nedostatečným kompenzacím protestovaly v prosinci ve Francii stovky umělců.',
      thumbnail: 'image5',
      url: 'assets/images/5.jpg',
      id: 5,
      favorite: false,
    },
    {
      title: 'Image 6',
      description: 'My, ve vašich očích šašci a klauni, jsme od nepaměti měli za úkol nastavovat mocným zrcadlo. ',
      thumbnail: 'image6',
      url: 'assets/images/6.jpg',
      id: 6,
      favorite: true,
    },
    {
      title: 'Image 7',
      description: ' S radostí a hrdá na práci kolegů jsem předávala hlavní cenu pro nejlepšího herce Ivanu Trojanovi za film Šarlatán. My, ve vašich očích šašci a klauni, jsme od nepaměti měli za úkol nastavovat mocným zrcadlo. ',
      thumbnail: 'image7',
      url: 'assets/images/7.jpg',
      id: 7,
      favorite: true,
    },
    {
      title: 'Image 8',
      description: 'Herečka se na předávání Césarů svlékla ze zakrvavené oslí kůže donaha',
      thumbnail: 'image8',
      url: 'assets/images/8.jpg',
      id:8,
      favorite: true,
    },
    {
      title: 'Image 9',
      description: 'Pohádková jízda Barbory Krejčíkové na turnaji v Dubaji se zastavila těsně pod vrcholem. Pětadvacetiletá česká tenistka ve svém druhém finále na okruhu WTA v sobotu podlehla Španělce Garbině Muguruzaové 6:7 a 3:6 a nenapodobila tak Petru Kvitovou, která minulý týden stejnou soupeřku ve finále v Dauhá jednoznačně zdolala.',
      thumbnail: 'image9',
      url: 'assets/images/9.jpg',
      id: 9,
      favorite: false,
    },
    {
      title: 'Image 10',
      description: 'Bývalá svěřenkyně Jany Novotné udělala obrovský výkonnostní skok a svoji chytrou hrou si získala velký respekt. Tento týden porazila v Dubaji i grandslamové šampionky Ostapenkovou a Kuzněcovovou nebo osvalenou Řekyni Marii Sakkariovou, která se už delší dobu pohybuje kolem TOP 20 ve světovém žebříčku.',
      thumbnail: 'image10',
      url: 'assets/images/10.jpg',
      id: 10,
      favorite: true,
    },
    {
      title: 'Image 11',
      description: 'Krejčíková dokázala Muguruzaové vzdorovat jen v prvním setu. V tie-breaku si dokonce vypracovala setbol, ale nakonec zkrácenou hru ztratila 6:8. V druhé sadě jako první neudržela podání a sedmadvacetiletá Španělka už výhodu nepustila. Na třetí pokus v roce 2021 oslavila finálové vítězství. Celkově získala devátou trofej.',
      thumbnail: 'image11',
      url: 'assets/images/11.jpg',
      id: 11,
      favorite: true,
    },
    {
      title: 'Image 12',
      description: 'Devětadvacetiletý Basilašvili vyhrál čtvrté finále za sebou a po dvou triumfech z Hamburku a jednom z Pekingu získal na okruhu ATP čtvrtý titul. Bautista naopak nenavázal na rok 2019, kdy ve finále v Dauhá porazil Tomáše Berdycha. Dvaatřicetiletý Španěl od té doby postoupil do dvou finále a obě prohrál',
      thumbnail: 'image12',
      url: 'assets/images/12.jpg',
      id:12,
      favorite: false,
    },
    {
      title: 'Image 13',
      description: 'Fotbalisté Opavy vybojovali v utkání proti Pardubicím třetí vítězství v této ligové sezoně. Stačila jim k tomu hubená výhra 1:0. Tu trefil v šesté minutě nastavenídivoké první půle z penalty Tomáš Smola poté, co byl vyloučen hostující Cadu. Slezané doma vyhráli poprvé na jaře a v neúplné tabulce se bodově dotáhli na šestnácté Brno. Pardubický nováček podruhé za sebou prohrál.',
      thumbnail: 'image13',
      url: 'assets/images/13.jpg',
      id: 13,
      favorite: false,
    },
    {
      title: 'Image 14',
      description: 'Zápas sousedů v tabulce mezi jedenáctým Zlínem a desátými Českými Budějovicemi se proměnil v jednoznačnou partii pro domácí. Ševci potvrdili, že se v poslední době zvedají. Bodovali už čtyři kola po sobě (z toho tři výhry). Dynamo v poločase prohrávalo těsně 0:1, ale po pauze inkasovalo ještě dvakrát a bylo hotovo.',
      thumbnail: 'image14',
      url: 'assets/images/14.jpg',
      id: 14,
      favorite: false,
    },
    {
      title: 'Image 15',
      description: 'Baník si po těsně porážce 1:2 na Slavii spravil chuť. Poslední Příbram odjela z jeho stadionu s debaklem 0:5. Tým vedený Ondřejem Smetanou už v poločase vedl 2:0 a po pauze rozdíl ve skóre dál navyšoval. Příbram prohrála dvanáctý zápas v řadě a spekuluje se o tom, zda nebyl zápas poslední pro příbramského trenéra Pavla Horvátha.',
      thumbnail: 'image15',
      url: 'assets/images/15.jpg',
      id: 15,
      favorite: true,
    },
  ];

  numberOfImages: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getImages(isFavoriteFilter: boolean): Observable<ImagesRatio> {
    let imgs: Image[];
    isFavoriteFilter ? imgs = this.images.filter(img => img.favorite) : imgs = this.images;
    const ratio = `${imgs.length}/${this.images.length}`
    const imageRatio: ImagesRatio = {images: imgs, ratio: ratio}
    return of(imageRatio)
  }

  getImage(id: any): Observable<Image> {
    console.log(id)
    let img: Image;
    id ? img = this.images.find(img => img.id == id) : img = null
    console.log(img)
    return of(img)
  }

}

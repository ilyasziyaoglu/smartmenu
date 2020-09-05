import {Component, OnInit} from '@angular/core';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = {
    currency: 'TL',
    content: [
      {
        name: 'KAHVALTI',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
            price: 60.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri, Tulum peyniri, Bal, Uc cesit ev yapimi recel, Kaymak, Tereyagi, Pekmez, Nutella, Siyah zeytin, Yesil zeytin, Salam, Jambon'
          },
          {
            name: 'SAKLIBAHCE KAHVALTI TABAGI',
            image: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
            price: 30.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri, Tulum peyniri, Bal, Uc cesit ev yapimi recel, Kaymak, Tereyagi, Pekmez, Nutella, Siyah zeytin, Yesil zeytin, Salam, Jambon'
          },
          {
            name: 'SAKLIBAHCE MENEMEN',
            image: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri, Tulum peyniri, Bal, Uc cesit ev yapimi recel, Kaymak, Tereyagi, Pekmez, Nutella, Siyah zeytin, Yesil zeytin, Salam, Jambon'
          }
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      },
      {
        name: 'SOGUK ICECEKLER',
        mainmedia: 'https://www.sopeli.com.tr/wp-content/uploads/2018/05/499KAHVALTI-SOPELI%CC%87-2018-web.jpg',
        items: [
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
          {
            name: 'Saklibahce Serpme Kahvalti',
            image: 'https://www.645kk.com/wp-content/uploads/2017/07/CAFE-LATTE.jpg',
            price: 20.00,
            content: 'Beyaz peynir, Kasar peyniri, Van otlu peynir, Burgu peyniri'
          },
        ]
      }
    ]
  };

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
  }
}

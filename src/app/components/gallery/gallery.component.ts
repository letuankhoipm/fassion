import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public cards = [
    {
      col: 8,
      imgUrl: 'https://www.copemlegit.com/wp-content/uploads/wpdesktop/adidas-shoes-desktop.jpg',
      name: 'adidas'
    },
    {
      col: 4,
      imgUrl: 'https://c1.wallpaperflare.com/preview/968/407/800/adidas-fashion-foot-footwear.jpg',
      name: ''
    },
    {
      col: 4,
      imgUrl: 'https://lh3.googleusercontent.com/proxy/F3uaKjRdNLk76yM9VSLCzOV511xGm_uEE5zXRGra3bz743ZTmI3-juZBFVzAUg6PGzC18IsOBamQOVtwU_5oTjJ0C3knrLMw',
      name: ''
    },
    {
      col: 4,
      imgUrl: 'https://i.pinimg.com/originals/c3/52/fa/c352fa38f974324e4536b43ff4b6d952.jpg',
      name: ''
    },
    {
      col: 4,
      imgUrl: 'https://www.webpackaging.com/Up/Comp/314/11040433/11633175-MSQYGNBE/i/prev/GCAL062_20170725_GCC-600x600.jpg',
      name: ''
    },
    {
      col: 8,
      imgUrl: 'https://www.wallpapertip.com/wmimgs/25-253382_fashion-wallpaper-macbook.jpg',
      name: ''
    },
    {
      col: 4,
      imgUrl: 'https://s4.favim.com/orig/50/bulls-cap-caps-chicago-bulls-chicago-bulls-jacket-Favim.com-449634.jpg',
      name: ''
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

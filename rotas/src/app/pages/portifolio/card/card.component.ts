import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
      private activeRoute: ActivatedRoute,
      private navigation: Router
      ){

        // RECUPERANDO PARAMETROS DE ROTA
    //http://localhost:4200/portifolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )

    this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    )

    // RECUPERANDO QUERY PARAMS

    //localhost:4200/portifolio/1?{name=leviton&token=123}
    this.activeRoute.queryParamMap.subscribe(
      res => console.log(res)
    )



  }

      // REDIRECIONAMENTO POR COMPONENTE
  ngOnInit(): void {
    //setInterval(() => {
  //    this.navigation.navigate(['/'])
//
  //  }, 5000)

  }

}

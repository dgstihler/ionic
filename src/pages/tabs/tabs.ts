import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab5Root = ConfiguracoesPage;

  constructor() {

  }
}

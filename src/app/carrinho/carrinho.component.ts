import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from '../notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0.00;
  
  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private router: Router
  ) { }

  ngOnInit(){
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calculaTotal();
  }

  calculaTotal(){
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0 );
  }

  removerItemCarrinho(produtoID: number) {
    this.carrinhoService.removerProdutoCarrinho(produtoID);
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoID);
    this.calculaTotal();
  }


  comprarItens(){
    this.notificacaoService.notificar("Parabéns, você acaba de comprar os produtos!!!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(['produtos']);

  }


}

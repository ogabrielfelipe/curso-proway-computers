"use strict";(self.webpackChunkproway_computer=self.webpackChunkproway_computer||[]).push([[899],{1899:(b,p,e)=>{e.r(p),e.d(p,{CarrinhoModule:()=>v});var c=e(6814),l=e(33),t=e(9468),d=e(8594),g=e(7216),a=e(95);function m(o,h){if(1&o){const n=t.EpF();t.TgZ(0,"ul")(1,"li"),t._UZ(2,"img",6),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"currency"),t.qZA(),t.TgZ(8,"label"),t._uU(9," Quantidade: "),t.TgZ(10,"input",7),t.NdJ("ngModelChange",function(i){const u=t.CHM(n).$implicit;return t.KtG(u.quantidade=i)})("change",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.calculaTotal())}),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){const s=t.CHM(n).$implicit,u=t.oxw(2);return t.KtG(u.removerItemCarrinho(s.id))}),t._UZ(12,"i",9),t.qZA()()()}if(2&o){const n=h.$implicit;t.xp6(2),t.Q6J("src",n.imagem,t.LSH),t.xp6(2),t.Oqu(n.descricao),t.xp6(2),t.hij("Pre\xe7o: ",t.xi3(7,4,n.preco,"BRL"),""),t.xp6(4),t.Q6J("ngModel",n.quantidade)}}function C(o,h){if(1&o){const n=t.EpF();t.TgZ(0,"div"),t.YNc(1,m,13,7,"ul",3),t.TgZ(2,"h2",4),t._uU(3),t.ALo(4,"currency"),t.qZA(),t.TgZ(5,"button",5),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.comprarItens())}),t._uU(6,"Comprar"),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.itensCarrinho),t.xp6(2),t.hij("Total: ",t.xi3(4,2,n.total,"BRL"),"")}}function f(o,h){1&o&&t._uU(0," Nenhum produto foi adicionado ao carrinho\n")}const _=[{path:"",component:(()=>{class o{constructor(n,r,i){this.carrinhoService=n,this.notificacaoService=r,this.router=i,this.itensCarrinho=[],this.total=0}ngOnInit(){this.itensCarrinho=this.carrinhoService.obterCarrinho(),this.calculaTotal()}calculaTotal(){this.total=this.itensCarrinho.reduce((n,r)=>n+r.preco*r.quantidade,0)}removerItemCarrinho(n){this.carrinhoService.removerProdutoCarrinho(n),this.itensCarrinho=this.itensCarrinho.filter(r=>r.id!==n),this.calculaTotal()}comprarItens(){this.notificacaoService.notificar("Parab\xe9ns, voc\xea acaba de comprar os produtos!!!"),this.carrinhoService.limparCarrinho(),this.router.navigate(["produtos"])}static#t=this.\u0275fac=function(r){return new(r||o)(t.Y36(d.e),t.Y36(g.r),t.Y36(l.F0))};static#n=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-carrinho"]],decls:5,vars:2,consts:[[1,"cart-title"],[4,"ngIf","ngIfElse"],["semProduto",""],[4,"ngFor","ngForOf"],[1,"cart-total"],[1,"buy-button",3,"click"],[3,"src"],["type","number",3,"ngModel","ngModelChange","change"],[1,"remove-button",3,"click"],[1,"fa-solid","fa-xmark"]],template:function(r,i){if(1&r&&(t.TgZ(0,"h2",0),t._uU(1,"Carrinho"),t.qZA(),t.YNc(2,C,7,5,"div",1),t.YNc(3,f,1,0,"ng-template",null,2,t.W1O)),2&r){const s=t.MAs(4);t.xp6(2),t.Q6J("ngIf",i.itensCarrinho.length>0)("ngIfElse",s)}},dependencies:[c.sg,c.O5,a.Fj,a.wV,a.JJ,a.On,c.H9],styles:[".cart-title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}li[_ngcontent-%COMP%]{display:flex;box-shadow:#64646f33 0 7px 29px;border-radius:8px;overflow:hidden;margin:10px 0;height:100px;align-items:center;justify-content:space-between}img[_ngcontent-%COMP%]{width:100px;height:100px;display:block}.remove-button[_ngcontent-%COMP%]{background-color:red;border:none;color:#fff;padding:20px;height:100%;transition:.2s all}.remove-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}.cart-total[_ngcontent-%COMP%]{font-size:24px;color:var(--gray);font-weight:700;padding:8px 0}input[_ngcontent-%COMP%]{width:30px;text-align:center}.buy-button[_ngcontent-%COMP%]{background-color:var(--blue);border:none;color:#fff;padding:10px;font-size:22px;margin-bottom:10px;transition:.3s all}.buy-button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}"]})}return o})()}];let x=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[l.Bz.forChild(_),l.Bz]})}return o})(),v=(()=>{class o{static#t=this.\u0275fac=function(r){return new(r||o)};static#n=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[c.ez,x,a.u5]})}return o})()}}]);
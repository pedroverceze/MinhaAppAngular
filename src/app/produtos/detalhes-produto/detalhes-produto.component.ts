import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produtos.service';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html'
})
export class DetalhesProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private activatedRoute : ActivatedRoute) { }

  public produtoDetalhes: Produto;
  private _id = this.activatedRoute.snapshot.params.id;

  ngOnInit(): void {

    console.log(this._id);
    this.produtoService.obterDetalhes(this._id)
    .subscribe(
      detalhes => {
        this.produtoDetalhes = detalhes;
      },
      error => console.log(error)
    );
  }

}

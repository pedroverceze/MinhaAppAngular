import { Routes } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { HomeComponent } from './navegacao/home/home.component';
import { DetalhesProdutoComponent } from './produtos/detalhes-produto/detalhes-produto.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'sobre', component: SobreComponent},
    {path: 'dataBinding', component: DataBindingComponent},
    {path: 'produtos', component: ListaProdutoComponent },
    {path: 'produto-detalhe/:id', component: DetalhesProdutoComponent }
];
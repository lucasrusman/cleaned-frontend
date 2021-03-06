import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./components/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./components/auth/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'usuarios/perfil',
    loadChildren: () => import('./components/usuarios/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'usuarios/editar-perfil',
    loadChildren: () => import('./components/usuarios/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'profesionales/perfil',
    loadChildren: () => import('./components/profesionales/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'profesionales/editar-perfil',
    loadChildren: () => import('./components/profesionales/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./components/usuarios/bienvenido/bienvenido.module').then(
        m => m.BienvenidoPageModule
      )
  },
  {
    path: 'servicios',
    loadChildren: () =>
      import('./components/usuarios/servicios/servicios.module').then(m => m.ServiciosPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

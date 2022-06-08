import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
<<<<<<< HEAD
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
=======
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
>>>>>>> c9ff95be03b34bdd7997c675f9b7cd3e8ce16828
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
<<<<<<< HEAD
    loadChildren: () => import('./components/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () =>
      import('./components/auth/registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () =>
      import('./components/usuarios/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () =>
      import('./components/usuarios/editar-perfil/editar-perfil.module').then(
        m => m.EditarPerfilPageModule
      )
=======
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
>>>>>>> c9ff95be03b34bdd7997c675f9b7cd3e8ce16828
  },
  {
    path: 'bienvenido',
    loadChildren: () =>
      import('./components/usuarios/bienvenido/bienvenido.module').then(
        m => m.BienvenidoPageModule
      )
  },
  {
<<<<<<< HEAD
    path: 'servicios',
    loadChildren: () =>
      import('./components/usuarios/servicios/servicios.module').then(m => m.ServiciosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
=======
    path: 'profesionales/perfil',
    loadChildren: () => import('./components/profesionales/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'profesionales/editar-perfil',
    loadChildren: () => import('./components/profesionales/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
>>>>>>> c9ff95be03b34bdd7997c675f9b7cd3e8ce16828

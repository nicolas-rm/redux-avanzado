import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Todo lo que tiene que ver con TodoMVC APP
import { TodoModule } from './todos/todo.module';
import { FooterComponent } from './footer/footer.component';
import { TodoReducer } from './todos/todo.reducer';

// NGRX
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Formularios Reactivos
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,

    StoreModule.forRoot(
      { todos: TodoReducer },

      // ======== Problemas de asignacion o de mutabilidad //
      // { runtimeChecks: { strictStateImmutability: false, strictActionImmutability: false } }
      // ================================================= //
    ),

    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

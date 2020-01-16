import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {TimelineListComponent} from './timeline-list/timeline-list.component';
import {GameComponent} from './game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TimelineListComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: '', component: TimelineListComponent},
        {path: 'game/:gameId', component: GameComponent}
      ]
    ),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

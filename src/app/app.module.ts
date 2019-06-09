import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// NG Translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import 'reflect-metadata';
import '../polyfills';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CircleTimerComponent } from './components/circle-timer/circle-timer.component';
import { ControlsComponent } from './components/controls/controls.component';
import { ScorerComponent } from './components/scorer/scorer.component';
import { InfoContainerComponent } from './containers/info-container/info-container.component';
import { MainContainerComponent } from './containers/main-container/main-container.component';
import { WebviewDirective } from './directives/webview.directive';
import { ElectronService } from './services/electron.service';
import { MinutesPipe } from './pipes/minutes.pipe';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WebviewDirective,
    CircleTimerComponent,
    ScorerComponent,
    MainContainerComponent,
    InfoContainerComponent,
    ControlsComponent,
    MinutesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import {Http} from '@angular/http';

import { InvestSystems } from './app.component';

import { TranslatePipe, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate/ng2-translate';

import { RuleOneRatingComponent } from '../+rule-one'

// Pages
import { DashboardComponent, DashboardHintComponent } from '../+dashboard';
import { CompanyListComponent, CompanyDetailComponent, CompanyEditComponent, CompanyService, SocialNetworkComponent } from '../+companies';

// Components
import { SignInComponent, IdentityPopoverComponent, IdentityService } from '../+identity'
import { UserPortfolioComponent, UserWatchlistComponent } from '../+dashboard';
import {
  RuleOneComponent,
  MeaningStatementComponent,
  ThreeCirclesComponent,
  FiveMoatsComponent,
  BigFiveComponent,
  BigFiveAnnualComponent,
  BigFiveGrowthComponent,
  EmaChartComponent,
  MacdChartComponent,
  StochasticChartComponent,
  MoatComponent,
  MeaningComponent,
  LevelFiveLeadersComponent,
  MarginComponent,
  ThreeToolsComponent,
  //MarginData
 } from '../+rule-one'

import { ColorizedDirective } from '../directives';

// Services
import { PortfolioService, WatchlistService } from '../+dashboard';
import { ManagementService, MarginService, MeaningService, MoatService, ThreeToolsService } from '../+rule-one'

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AboutPage, AboutTab, TeamTab, ContactTab } from '../pages/about';
import { SettingsPage } from '../pages/settings';
import { ToastService } from '../services'

import { Settings, setConfig, DEFAULT_APP_CONFIG } from '../shared';

import { TutorialPage, ContactService } from '../pages';

@NgModule({
  declarations: [
    InvestSystems,
    // Pages
    DashboardComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
    AboutPage,
    TutorialPage,
    // Components
    SocialNetworkComponent,
    SettingsPage,
    AboutTab,
    TeamTab,
    ContactTab,
    SignInComponent,
    UserPortfolioComponent,
    UserWatchlistComponent,
    RuleOneComponent,
    RuleOneRatingComponent,
    BigFiveAnnualComponent,
    BigFiveGrowthComponent,
    MeaningStatementComponent,
    ThreeCirclesComponent,
    FiveMoatsComponent,
    BigFiveComponent,
    EmaChartComponent,
    MacdChartComponent,
    StochasticChartComponent,
    MoatComponent,
    MeaningComponent,
    LevelFiveLeadersComponent,
    MarginComponent,
    ThreeToolsComponent,
    IdentityPopoverComponent,
    DashboardHintComponent,
    // Pipes
    TranslatePipe,
    // Directives
    ColorizedDirective
  ],
  imports: [
    IonicModule.forRoot(InvestSystems),
    //InMemoryWebApiModule.forRoot(MarginData)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    InvestSystems,
    SettingsPage,
    TutorialPage,
    AboutPage,
    SignInComponent,
    DashboardComponent,
    CompanyListComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
    AboutTab,
    TeamTab,
    ContactTab
  ],
  providers: [
    // Services
    Settings,
    setConfig(DEFAULT_APP_CONFIG),
    IdentityService,
    TranslateService,
    PortfolioService,
    WatchlistService,
    ManagementService,
    MeaningService,
    CompanyService,
    MoatService,
    MarginService,
    ThreeToolsService,
    ToastService,
    ContactService,
    {
      provide: TranslateLoader,
      useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
      deps: [Http]
    }
  ]
})
export class AppModule {}

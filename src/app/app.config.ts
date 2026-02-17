import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient } from "@angular/common/http";

import { routes } from './app.routes';
import { AuthInterceptor } from './auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideRouter(routes,
    withInMemoryScrolling({
      scrollPositionRestoration: 'enabled', // restores top on navigation
      anchorScrolling: 'enabled'            // scrolls to anchors like #section
    })
  ),
    provideHttpClient(), {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
};

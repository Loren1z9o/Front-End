import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ChatComponent } from './app/chat.component';

bootstrapApplication(ChatComponent, appConfig)
  .catch((err) => console.error(err));

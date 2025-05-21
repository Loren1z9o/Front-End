import { bootstrapApplication } from '@angular/platform-browser';
import { ChatComponent } from './app/chat.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(ChatComponent, config);

export default bootstrap;

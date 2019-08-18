import { Component } from '@angular/core';
import { fromWorker } from 'observable-webworker';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observables-workers';

  runWorker() {
    const demoWorker = new Worker('./demo.worker', { type: 'module' });

    demoWorker.onmessage = (message) => {
      console.log(`Got message`, message.data);
    };

    demoWorker.postMessage('hello');

  }

  runWorkerRxjs() {

    // We can pass a stream of data to be process on worker
    const input$: Observable<string> = of('hello');

    fromWorker<string, string>(() => new Worker('./demo-rxjs.worker', { type: 'module' }), input$)
      .subscribe(message => {
        console.log(`Got message`, message);
      });

  }
}

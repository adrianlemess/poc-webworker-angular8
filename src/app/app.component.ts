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
  private counter = 0;
  private counterRxjs = 0;

  // runWorker() {
  //   const demoWorker = new Worker('./demo.worker', { type: 'module' });
  //   demoWorker.onmessage = (message) => {
  //     console.log(`Got message`, message.data);
  //     this.counter++;
  //   };

  //   const messageSent = this.counter + ' hello';
  //   demoWorker.postMessage(messageSent);

  // }

  runWorker() {

    // We can pass a stream of data to be process on worker
    const input$: Observable<string> = of(`${this.counterRxjs} - hello`);

    fromWorker<string, string>(() => new Worker('./demo-rxjs.worker', { type: 'module' }), input$)
      .subscribe(message => {
        console.log(`Got message`, message);
        this.counterRxjs++;
      });

  }
}

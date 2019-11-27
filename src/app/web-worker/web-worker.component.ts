import { Component, OnInit } from '@angular/core';
import { fromWorker } from 'observable-webworker';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {
  private counter = 0;
  private counterRxjs = 0;

  constructor() { }

  ngOnInit() {

  }

  runWorker() {
    const demoWorker = new Worker('../demo.worker', { type: 'module' });
    demoWorker.onmessage = (message) => {
      console.log(`Got message`, message.data);
      this.counter++;
    };

    const messageSent = this.counter + ' hello';
    demoWorker.postMessage(messageSent);

  }

  // runWorker() {

    // We can pass a stream of data to be process on worker
    // const input$: Observable<string> = of(`${this.counterRxjs} - hello`);

    // fromWorker<string, string>(() => new Worker('../demo-rxjs.worker', { type: 'module' }), input$)
    //   .subscribe(message => {
    //     console.log(`Got message`, message);
    //     this.counterRxjs++;
    //   });

  // }

}

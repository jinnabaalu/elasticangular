import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';

@Injectable()
export class ConnectService {
  private client: Client;
  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: 'http://localhost:9200',
      log: 'trace'
    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'hello JavaSampleApproach!'
    });
  }
}

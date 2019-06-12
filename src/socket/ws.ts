/**
 * ws
 * @author guobin201314@gmail.com on 2019-05-25
 */
import { Server } from 'ws';

const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 11211});

export class Ws {
  private wsClients = new Map();
  constructor() {
    wss.on('connection', (client: any) => {
      client.on('message', (data: any) => {
        if (!this.wsClients.has(data.id)) {
          this.wsClients.set(data.id, client);
        }
      })
    })
  }

  public broadcast(data: string) {
    wss.clients.forEach((client: any) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    })
  }
}


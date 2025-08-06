// src/models/Cachorro.ts
import { Animal } from './Animal';

export class Hamster extends Animal {
  emitirSom(): string {
    return 'Ric ric!';
  }

  correr() {
    return `Humm.. Estou de barriga cheia!`;
  }
}
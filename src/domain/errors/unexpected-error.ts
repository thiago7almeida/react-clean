export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado aconteceu. Tente mais tarde.')
    this.name = 'UnexpectedError'
  }
}

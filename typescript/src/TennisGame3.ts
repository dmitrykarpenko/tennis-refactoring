import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {
  // nit: consider assigning in constructor
  // name semantically, w/o numbers and in camelCase
  private p2: number = 0;
  private p1: number = 0;
  // nit: or consider having default values, e.g. `null`
  // nit: consider removing numbers from variable names and using camelCase
  private p1N: string;
  private p2N: string;

  constructor(p1N: string, p2N: string) {
    this.p1N = p1N;
    this.p2N = p2N;
  }

  getScore(): string {
    // name semantically, e.g. score
    let s: string;
    // magic numbers: please set constants to 4, 6 and name those descriptively
    if (this.p1 < 4 && this.p2 < 4 && !(this.p1 + this.p2 === 6)) {
      // name semantically, consider making a `scoreMap: Record<number, string>`
      // refactor up to the class level or even global object (e.g. ScoreUtil or ScoreConstants) for semantics and performance
      const p: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];
      s = p[this.p1];
      // consider using a string literal for consistency
      return (this.p1 === this.p2) ? s + '-All' : s + '-' + p[this.p2];
    } else {
      // name semantically
      if (this.p1 === this.p2)
        return 'Deuce';
      s = this.p1 > this.p2 ? this.p1N : this.p2N;
      // make the line shorter, e.g. put calculations into semantic variables
      return (((this.p1 - this.p2) * (this.p1 - this.p2)) === 1) ? 'Advantage ' + s : 'Win for ' + s;
    }
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.p1 += 1;
    else
      this.p2 += 1;
  }
}

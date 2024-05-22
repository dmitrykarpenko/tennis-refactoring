import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private m_score1: number = 0;
  private m_score2: number = 0;
  private player1Name: string;
  private player2Name: string;

  private MAX_POINTS_COUNT:number = 4;

  private scoreMap: Record<number, string> = {
    0: 'Love',
    1: 'Fifteen',
    2: 'Thirty',
    3: 'Forty',
  };

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.m_score1 += 1;
    else
      this.m_score2 += 1;
  }

  // treating it as "public" method
  getScore(): string {
    let score: string = '';
    if (this.m_score1 === this.m_score2) { // equal score - '...-All' output or 'Deuce', game continues
      const first: string = this.scoreMap[this.m_score1];
      // can be ternary
      if (!first || first === 'Forty') {
        score = 'Deuce';
      }
      else {
        score = `${first}-All`;
      }
    }
    else if (this.m_score1 >= this.MAX_POINTS_COUNT
      || this.m_score2 >= this.MAX_POINTS_COUNT) { // someone is winning
      const minusResult: number = this.m_score1 - this.m_score2;
      if (minusResult === 1) score = 'Advantage player1';
      else if (minusResult === -1) score = 'Advantage player2';
      else if (minusResult >= 2) score = 'Win for player1';
      else score = 'Win for player2';
    }
    else { // not equal score, game continues
      score = `${this.scoreMap[this.m_score1]}-${this.scoreMap[this.m_score2]}`;
    }
    return score;
  }
}

/**
 * ダイスシステムの型定義
 * Expert Rule Card Game用
 */

// 属性の種類
export enum Element {
  FIRE = '火',      // 火
  WATER = '水',     // 水
  WIND = '風',      // 風
  EARTH = '土',     // 土
  LIGHT = '光',     // 光
  DARK = '闇',      // 闇
  NONE = 'なし'     // なし
}

// ダイスの結果
export interface DiceResult {
  value: number;           // ダイスの目 (1-6)
  element: Element;        // 属性
  rollTime: Date;          // 振った時刻
}

// 複数のダイス結果
export interface DiceRollResult {
  results: DiceResult[];   // ダイスの結果配列
  totalValue: number;      // 合計値
  totalElements: Record<Element, number>;  // 属性別の合計
}

// スキルのダイス要件
export interface DiceRequirement {
  element: Element;        // 必要な属性
  count: number;          // 必要な個数
}

// スキル実行の条件
export interface SkillCondition {
  requirements: DiceRequirement[];  // ダイス要件
  costATK?: number;               // ATKコスト
  costHP?: number;                // HPコスト
}

// ダイス計算の結果
export interface DiceCalculationResult {
  isMatch: boolean;                           // 条件を満たしているか
  matchedElements: Record<Element, number>;   // マッチした属性別個数
  remainingElements: Record<Element, number>; // 残った属性別個数
  totalATK: number;                          // 総攻撃力
  details: string;                           // 詳細説明
}

// キャラクターのダイス情報
export interface CharacterDiceInfo {
  baseATK: number;                  // 基本攻撃力
  diceElements: Element[];          // 保持しているダイスの属性
  skillTextBonus?: number;          // スキルテキストによるボーナス
}

// バトルのダイス計算コンテキスト
export interface BattleContext {
  playerCharacter: CharacterDiceInfo;
  opponentCharacter: CharacterDiceInfo;
  playerDiceResult: DiceRollResult;
  opponentDiceResult: DiceRollResult;
  phase: 'attack' | 'defense';      // 攻撃フェイズか防御フェイズか
}

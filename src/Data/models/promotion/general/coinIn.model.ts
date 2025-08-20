export interface CoinInModel {
  saveAsTemplate: boolean;
  coinName: string;
  description: string;
  resetCron: string;
  nextAt?: string;
  cronExplanation?: string;
  filePath?: string;
  usedTemplate?: boolean;
  manuallyConfigured?: boolean;
}

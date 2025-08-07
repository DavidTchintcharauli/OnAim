export interface WithdrawModel {
  saveAsTemplate: boolean;
  coinName: string;
  description: string;
  value: number;
  resetCron: string;
  nextAt?: string;
  cronExplanation?: string;
  filePath?: string;
  usedTemplate?: boolean;
  manuallyConfigured?: boolean;
}

interface WithdrawOption {
  id: number;
  label: string;
}

export interface WithdrawOptionsModalModel {
  title: string;
  withdrawOptions: WithdrawOption[];
  selectedIds: number[];
  action: 'cancel' | 'save';
}

export interface GeneralSettingsModel {
  saveAsTemplate: boolean;
  hasOptIn: boolean;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  rewardAmount: number;
  segments: string[];
}

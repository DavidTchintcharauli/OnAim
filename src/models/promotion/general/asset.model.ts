export interface AssetModel {
  saveAsTemplate: boolean;
  coinName: string;
  description: string;
  filePath?: string;
  usedTemplate?: boolean;
  price: number;
}
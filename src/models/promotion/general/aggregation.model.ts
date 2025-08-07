export interface AggregationModel {
  aggregationName: string;
  aggregationDescription: string;
  resetCron: string;
  nextAt?: string;
  cronExplanation?: string;
  eventSource: 'Internal' | 'External';
  eventType: 'Bet' | 'Win' | 'Deposit' | string;
  condition: AggregationCondition;
  aggregationConfig: AggregationConfig;
  evaluationRule: PointEvaluationRule;
}

export interface AggregationCondition {
  logicOperator: 'And' | 'Or';
  filters: AggregationFilter[];
}

export interface AggregationFilter {
  property: string;
  operator: '=' | '!=' | '<' | '<=' | '>' | '>=' | string;
  value: string | number;
}

export interface AggregationConfig {
  aggregationType: 'Sum' | 'Avg' | 'Max' | 'Min' | string;
  selectionField: string;
  pointLimit?: number;
}

export interface PointEvaluationRule {
  type: 'single' | 'steps';
  singleRule?: {
    for: number;
    give: number;
  };
  stepsRule?: StepRule[];
}

export interface StepRule {
  step: number;
  points: number;
}

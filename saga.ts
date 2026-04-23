export interface Step {
  name: string;
  action: string;
  compensation: string;
}

export interface Saga {
  id: string;
  steps: Step[];
  currentStep: number;
  status: string;
  data: any;
}

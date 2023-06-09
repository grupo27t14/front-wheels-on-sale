import { InputHTMLAttributes } from "react";

export interface iRadioButtonDivProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  value: string | number;
  defaultChecked?: boolean;
}

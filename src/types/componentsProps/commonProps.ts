export interface SelectPropsI {
  placeholder?: string
  label?: string
  id?: string | number
  modelValue?: number | string | null
  isLabel?: boolean
  showSearch?: boolean
  options: SelectOptionTypes[]
}

export interface SelectPropsOptionI {
  value: number
  label: string
}

export interface SelectPropsOptionUniversityI {
  title: string
  id: number
}

export type SelectOptionTypes = SelectPropsOptionI | SelectPropsOptionUniversityI

export interface IconPropsI {
  width: number
  height: number
  props?: StyleSheet
}


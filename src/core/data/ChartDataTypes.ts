import * as GenericTypes from './GenericTypes'

export declare type BarChartData = number[]

export declare type LineChartData = number[] | number[][]

export declare type PieChartData =
  GenericTypes.NameValuePair[]
  | GenericTypes.NameValuePair[][]

export declare type ScatterChartData = {
  name: string,
  value: number[][]
}
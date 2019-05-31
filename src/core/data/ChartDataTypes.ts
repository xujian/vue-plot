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

export declare type MapData = number[]

export declare type TreeChartData = {
  name: string,
  children: [
    TreeChartData | { name: string, value: number }
  ]
}

export declare type TreemapChartData = {
  name: string,
  value: number
}[]

export declare type RadarChartData = {
  name: string,
  value: number[]
}[]

export declare type GaugeChartData = {
  name: string,
  value: number[]
}[]

export declare type NetworkChartData = {
  name: string,
  value: number[]
}[]

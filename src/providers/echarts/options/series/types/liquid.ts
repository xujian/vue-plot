export default function (series: any[], props: any) {
  let autoDistribute: string[] = Array(series.length).fill(0)
    .map((x: number, i: number) => 100 * (i + 1) / (series.length + 1)) 
    .map(x => x + '%')
  let distribute = props.distribute || autoDistribute
  return series.map((s: any, i: number) => Object.assign(
    {},
    s,
    { center: [distribute[i], '50%'] }))
}
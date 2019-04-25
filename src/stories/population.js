import { storiesOf } from '@storybook/vue'

let stories = storiesOf('业务图表|人口', module)

stories.add('人口概况', () => ({
  template: `<pa-bar-chart
    style="width:400px;height:200px;"
    :title="'南山区人口概况'"
    :preset="'no-lines'"
    :stacked="true"
    :dataset="[
      ['万人', '1月', '2月'],
      ['常住人口', 179.56, 73.05],
      ['非常住人口', 1388.92, 1392.54]
    ]">
      <pa-tooltip
        :formatter="[
          '{b}<br>',
          '{a0}: {c0} (万人)<br>',
          '{a1}: {c1} (万人)'
        ].join('')"></pa-tooltip>
    </pa-bar-chart>`
}))

stories.add('常住人口分析', () => ({
  template: `<pa-pie-chart
    style="width:400px;height:200px;"
    title="年龄分布"
    preset="circle,legend-right-vertical"
    :styles="{ background: 'transparent' }"
    :data="[[
      { name: '0-17岁', value: 0.58 },
      { name: '18-40岁', value: 38.18 },
      { name: '41-49岁', value: 30.94 },
      { name: '50-59岁', value: 22.27 },
      { name: '60-65岁', value: 6.91 },
      { name: '66岁及以上', value: 3.12 }
    ]]">
    </pa-pie-chart>`
}))

stories.add('分区人口增长', () => ({
  template: `<pa-bar-chart
    :preset="'gdp-by-years'"
    :styles="{
      canvas: {
        margin: ['5%', '8%', '20%', '8%']
      },
      x: {
        rotate: 45,
        fontSize: 10
      }
    }"
    :title="'南山区人口增长'"
    :dataset="'mocks:gdp-by-years-dataset'">
      <pa-tooltip
        :position="[10, 10]"
        :formatter="[
          '{b}<br>',
          '{a0}: {c0} (亿元)<br>',
          '{a1}: {c1} (亿元)<br>',
          '{a2}: {c2} %',
        ].join('')"
        :style="{}"></pa-tooltip>
      <pa-axis
        position="right"
        :label="'Y'"></pa-axis>
      <pa-line-chart
        :axis="'right'"
        :legend="['同比增长']"
        :data="[[6.88, 9.38, 8.46, 16.1, 12.4, 13.5, 14.9, 11.5, 14.5, 6.50]]"></pa-line-chart>
    </pa-bar-chart>`
}))

stories.add('籍贯分布', () => ({
  template: `<pa-bar-chart
    style="width:400px;height:200px;"
    :title="'籍贯分布'"
    :preset="'no-lines'"
    :stacked="true"
    :rotate="90"
    :x="['广东', '湖南', '湖北', '四川', '广西']"
    :y="{ unit: '%' }"
    :data="[
      [61.16, 6.98, 5.89, 4.23, 3.78]
    ]">
      <pa-tooltip
        :formatter="[
          '{b}<br>',
          '{c0} (万人)'
        ].join('')"></pa-tooltip>
    </pa-bar-chart>`
}))

stories.add('职住分析', () => ({
  template: `<div class="html-chart relative"
    style="width:360px;height:240px">
    <h6>南山居住 - 南山工作</h6>
    <pa-pie-chart class="absolute"
      style="width:25%;height:40%;top:30%;left:15%"
      preset="no-label,no-legend"
      :radius="['0%', '95%']"
      :colors="['#005c8f', 'transparent', 'transparent', '#005c8f']"
      :data="[[
        { name: 'A', value: 66.4 },
        { name: '', value: 10.8 },
        { name: '', value: 22.8 }
      ]]"
    >
      <pa-pie-chart
        :radius="['99%', '100%']"
        :styles="{ label: false }"
        :data="[
          [{name: '', value: 100 }]
        ]"
      ></pa-pie-chart>
    </pa-pie-chart>
    <div class="absolute" style="
      width:50%;
      right:0;
      height:80%;
      background-image:url(/assets/chart/images/livein.png);
      background-position: center center;
      background-repeat: no-repeat;"></div>
  </div>`
}))

export default stories

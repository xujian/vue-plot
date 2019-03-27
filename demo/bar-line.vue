<template>
  <div class="demo-page">
    <h2>bar-line</h2>
    <div style="width:400px;height:200px;position:absolute;right:10px;top:10px">
      <pa-bar-chart
        :bar-width="20"
        :round="true"
        :styles="{background: '#240'}"
        :data="[
          [100, 150, 500, 250, 400],
          [47, 100, 100, 430, 210]
        ]">
          <pa-legend align="right" :data="['A', 'B', 'C', 'D']"></pa-legend>
          <pa-axis
            position="right"
            :label="'Y'"
            :data="['A', 'B', 'C', 'D', 'E']"></pa-axis>
          <pa-line-chart
            :axis="'right'"
            :smooth="true"
            :data="[
              [0.25, 0.87, 0.33, 0.5, 0.12],
              [0.78, 0.76, 0.34, 0.69, 0.78]
            ]">
            <pa-marks type="max-min"></pa-marks>
          </pa-line-chart>
          <pa-tooltip
            :position="[10, 10]"
            :style="{}"></pa-tooltip>
      </pa-bar-chart>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

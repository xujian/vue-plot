let options = {
  xAxis: undefined,
  yAxis: undefined,
  title: {
    text: '地图',
    subtext: 'Map'
  },
  tooltip: {
    trigger: 'item'
  },
  bmap: {
    center: [104.114129, 37.550339],
    zoom: 5,
    roam: true,
    mapStyle: {
      styleJson: [{
        'featureType': 'water',
        'elementType': 'all',
        'stylers': {
          'color': '#d1d1d1'
        }
      }, {
        'featureType': 'land',
        'elementType': 'all',
        'stylers': {
          'color': '#f3f3f3'
        }
      }, {
        'featureType': 'railway',
        'elementType': 'all',
        'stylers': {
          'visibility': 'off'
        }
      }, {
        'featureType': 'highway',
        'elementType': 'all',
        'stylers': {
          'color': '#fdfdfd'
        }
      }, {
        'featureType': 'highway',
        'elementType': 'labels',
        'stylers': {
          'visibility': 'off'
        }
      }, {
        'featureType': 'arterial',
        'elementType': 'geometry',
        'stylers': {
          'color': '#fefefe'
        }
      }, {
        'featureType': 'arterial',
        'elementType': 'geometry.fill',
        'stylers': {
          'color': '#fefefe'
        }
      }, {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': {
          'visibility': 'off'
        }
      }, {
        'featureType': 'green',
        'elementType': 'all',
        'stylers': {
          'visibility': 'off'
        }
      }, {
        'featureType': 'subway',
        'elementType': 'all',
        'stylers': {
          'visibility': 'off'
        }
      }, {
        'featureType': 'manmade',
        'elementType': 'all',
        'stylers': {
          'color': '#d1d1d1'
        }
      }, {
        'featureType': 'local',
        'elementType': 'all',
        'stylers': {
          'color': '#d1d1d1'
        }
      }, {
        'featureType': 'arterial',
        'elementType': 'labels',
        'stylers': {
          'visibility': 'off'
        }
      }, {
        'featureType': 'boundary',
        'elementType': 'all',
        'stylers': {
          'color': '#fefefe'
        }
      }, {
        'featureType': 'building',
        'elementType': 'all',
        'stylers': {
          'color': '#d1d1d1'
        }
      }, {
        'featureType': 'label',
        'elementType': 'labels.text.fill',
        'stylers': {
          'color': '#999999'
        }
      }]
    }
  }
}

export default options

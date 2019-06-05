const fs = require('fs')

fs.rename(
  'dist/support.common.js',
  'dist/support.js',
  (err)=>{
    console.log(err)
  }
)


#! /usr/bin/env node
import protocPlugin from 'protoc-plugin'

protocPlugin(protos => {
  // do stuff here with protos
  // return array like [{name: 'filename', content: 'CONTENTS'}]
})

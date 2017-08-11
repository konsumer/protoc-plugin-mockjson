# protoc-plugin-mockjson

Generate JSON mocks from proto definition.

This is really meant to be a simple demo of [node-protoc-plugin](https://github.com/konsumer/node-protoc-plugin).

It's written in ES6, to give you a feel of how to do that.

## installation

You can install it with `npm i -g protoc-plugin-mockjson`

## usage

```
protoc proto/api.proto -I ./proto --mockjson_out=out/
```
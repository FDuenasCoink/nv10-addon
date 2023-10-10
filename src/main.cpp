#include <napi.h>
#include "nv10/NV10Wrapper.hpp"

Napi::Object InitAll(Napi::Env env, Napi::Object exports) {
  NV10Wrapper::Init(env, exports);
  return exports;
}

NODE_API_MODULE(nv10_addon, InitAll);
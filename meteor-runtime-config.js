(function() { // enforce the context to be the window

(function() {
  var _ = Package['underscore']._;
  var config = this.__meteor_runtime_config__ || {};

  __meteor_runtime_config__ = _.defaults({}, config, {
    meteorEnv: {},
    DDP_DEFAULT_CONNECTION_URL: window.DDP_DEFAULT_CONNECTION_URL
  });
}).call(this);

})();

module.exports = exports = function mogoosePosition (schema, options) {
  var model = options.model;
  schema.add({ position: Number });

  schema.pre('save', function (next) {
    var _this = this;

    if (model && typeof(this.position) === 'undefined') {
      model.count({}).exec(function (err, count) {
        _this.position = count + 1;
        next();
      });
    } else {
      next();
    }
  });
};

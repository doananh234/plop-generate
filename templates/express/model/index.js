let {{pluralize name}} = require('./{{pluralize name}}.ctrl').default

module.exports = {
  create: {{pluralize name}}.create,
  all: {{pluralize name}}.all,
  get: {{pluralize name}}.get,
  patch: {{pluralize name}}.patch,
  remove: {{pluralize name}}.remove
}
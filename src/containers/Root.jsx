/**
 * Split Root.jsx into Root.dev.jsx Root.prod.jsx so that
 * we can specifically define what routes or components will be used in each environemnt
 *
 * NOTE: if a component (such as UserPage) belongs to both dev and prod environment,
 * remember to put the component in both Root.dev.jsx and Root.prod.jsx
 */
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./Root.prod')
} else {
  module.exports = require('./Root.dev')
}

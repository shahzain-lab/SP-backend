module.exports = ({ env }) => ({
    proxy: true,
    url: env('https://mysterious-refuge-72019.herokuapp.com/'),
    app: { 
      keys: env.array('APP_KEYS')
    },
  })
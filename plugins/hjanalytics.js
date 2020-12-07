export default async ({ app }) => {
  app.router.afterEach(async(to, from) => {
    console.log("Requesting to bot");
    app.$axios.post('http://server.hamedj.ir:2688/BotGateway/Log',
      `logLevel=BlogVisit&logText=${to.path}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
  )
  });
}

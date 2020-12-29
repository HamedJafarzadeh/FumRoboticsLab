export default async ({ app }) => {
  if (process.env.NODE_ENV !== 'production')
    return;

  app.router.afterEach(async(to, from) => {
    app.$axios.post('http://server.hamedj.ir:2688/BotGateway/Log',
      `logLevel=FUMRoboticsVisit&logText=${to.path}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
  )
  });
}

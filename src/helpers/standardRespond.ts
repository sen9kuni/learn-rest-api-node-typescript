const response = (res: any, msg: string, results: any, pageInfo: any, status: number = 200) => {
  let success: boolean = true
  if (status >= 400) {
    success = false
  }

  const data: any = {
    success,
    message: msg
  }

  if (pageInfo) {
    data.pageInfo = pageInfo
  }

  if (results) {
    data.results = results
  }

  return res.status(status).json(data)
}

export default response

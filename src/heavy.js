const getMoment = async () => {
  const moment = await import("moment")
  return moment().format("YYYY/MM/dd")
}

export default () => {
  return getMoment()
}
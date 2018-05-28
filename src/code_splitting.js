const getDate = () => import(/* webpackChunkName: "heavy" */"./heavy")

const main = async () => {
  console.log("Today is...")
  const m = await getDate()
  console.log(m.default())
}
main()
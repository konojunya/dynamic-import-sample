import moment from "moment"

const getDate = () => {
  return moment().format("YYYY/MM/DD")
}

export default getDate
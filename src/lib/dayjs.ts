import dayjs from "dayjs"
import duration from "dayjs/plugin/duration"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/pt-br"

// define locale
dayjs.locale("pt-br")

// plugins
dayjs.extend(duration)
dayjs.extend(relativeTime)

const date = dayjs

export { date }

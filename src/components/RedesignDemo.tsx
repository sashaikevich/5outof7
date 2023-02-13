import { OutreachLimitsGroup } from "./OutreachLimits"
import { SetupProvider } from "../contexts/dataContext"
import localFont from "@next/font/local"

const qanelas = localFont({
  src: [
    {
      path: "../assets/fonts/Qanelas/Qanelas-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Qanelas/Qanelas-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/Qanelas/Qanelas-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/Qanelas/Qanelas-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: '--font-qanelas'
})
const RedesignDemo = () => {
  return (
    <SetupProvider>
      <div className={`${qanelas.variable} font-sans`}>
        <OutreachLimitsGroup />
      </div>
    </SetupProvider>
  )
}
export default RedesignDemo

import { SubSection } from "./SubSection"
import { Text } from "./Text"
import { InputRadioGroup } from "./InputRadioGroup"
import { InputRadioOption } from "./InputRadioOption"
import { InputRange } from "./InputRange"
import { useSetupContext } from "../contexts/dataContext"
import { SendScheduleType } from "./d"

export const OutreachLimitsGroup = () => {
  const { data } = useSetupContext()
  const sendOnWeekend = data["sendSchedule"] === SendScheduleType.Weekends

  return (
    <SubSection
      columnView={true}
      heading="Outreach limits"
      description="Your crawler should mimic your typical behavior to avoid hitting
LinkedIn's abuse limits.">
      <Text variant="label-md" className="text-right">
        Send invites
      </Text>
      <InputRadioGroup mappedName="sendSchedule">
        <InputRadioOption value={SendScheduleType.Weekdays}>
          During working hours
        </InputRadioOption>
        <InputRadioOption value={SendScheduleType.Weekends}>
          Randomly throughout the week
        </InputRadioOption>
      </InputRadioGroup>

      <Text variant="label-md" className="text-right">
        Send frequency:
      </Text>
      <InputRange
        min={1}
        max={Math.floor(100 / (sendOnWeekend ? 7 : 5))}
        labelLow="1"
        size="sm"
        labelHigh="MAXIMUM"
        mappedName="sendFrequency"
        showLabels={true}
        tooltipOverride={val => {
          if (val === null || val === undefined) return
          return (
            <div className="text-redi-primary-dark whitespace-nowrap">
              <span className="text-redi-primary">{val}</span>/day
            </div>
          )
        }}
      />
    </SubSection>
  )
}

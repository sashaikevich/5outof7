/* 
PHANTOM'S VIEW MODES
*/

export const VisibleSlug = {
  Quick: "quick",
  All: "all",
  JSON: "json",
} as const

export type VisibleSlugType = typeof VisibleSlug[keyof typeof VisibleSlug]

export interface ViewModeType {
  label: string
  slug: VisibleSlugType
}

/* 
PHANTOM SETUP MENU 
*/

export interface FlowMenuItemType {
  label: string
  visibleIn: VisibleSlugType[]
  subMenuItems?: FlowMenuItemType[]
}
export interface FlatFlowMenuItemType
  extends Omit<FlowMenuItemType, "subMenuItems"> {
  id: number
  level: number
  childrenIds?: number[]
}

/*
PHANTOM'S NOTIFICATION GRID OPTIONS
*/

export const triggers = [
  {
    label: "Finished successfully",
    mappedPrefix: "eventSuccFinish",
  },
  {
    label: "Finished with error",
    mappedPrefix: "eventErrFinish",
  },
  {
    label: "Launch error",
    mappedPrefix: "eventErrLaunch",
  },
  {
    label: "Time limit reached",
    mappedPrefix: "eventLimitTime",
  },
] as const

export type TriggerPrefixType = typeof triggers[number]["mappedPrefix"]

export const channels = [
  {
    label: "Email",
    mappedSuffix: "via_email",
  },
  {
    label: "Slack",
    mappedSuffix: "via_slack",
  },
  {
    label: "Webhook",
    mappedSuffix: "via_webhook",
  },
] as const

export type ChannelsSuffixType = typeof channels[number]["mappedSuffix"]

/* 
PHANTOM SETUP OPTIONS (used to map form fields)
*/

export enum SendScheduleType {
  Weekdays = "WEEKDAYS",
  Weekends = "WEEKENDS",
}

export enum ManageFoldersType {
  Keep = "KEEP",
  Create = "CREATE",
  Delete = "DELETE",
}
export enum PreferredProxyType {
  None = "NONE",
  Random = "RANDOM",
  Phantombuster = "PHANTOMBUSTER",
  Http = "HTTP",
}

export enum IPLifespanType {
  Static = "STATIC",
  Dynamic = "DYNAMIC",
}

export type PhantomSetupFieldsMap = Partial<{
  demo: number
  searchTerm: string
  searchType: string
  dataColumn: string
  personalizedMsg: string
  linkedInCookie: string
  useSalesNavigator: boolean
  sendSchedule: SendScheduleType
  sendFrequency: number
  limitRegularSearch: number
  limitNavigatorSearch: number
  limitGroupSearch: number
  maxExecutionTime: number
  maxParallelExecutions: number
  maxRetries: number
  manageFolders: ManageFoldersType
  keepNFolders: number
  preferredProxy: PreferredProxyType
  proxyAddress: string
  proxyUsername: string
  proxyPassword: string
  IPLifespan: IPLifespanType
  refreshFrequency: number
  proxyLocation: string
  eventSuccFinish_via_email: boolean
  eventSuccFinish_via_slack: boolean
  eventSuccFinish_via_webhook: boolean
  eventErrFinish_via_email: boolean
  eventErrFinish_via_slack: boolean
  eventErrFinish_via_webhook: boolean
  eventErrLaunch_via_email: boolean
  eventErrLaunch_via_slack: boolean
  eventErrLaunch_via_webhook: boolean
  eventLimitTime_via_email: boolean
  eventLimitTime_via_slack: boolean
  eventLimitTime_via_webhook: boolean
  slackWebhook: string
  webhook: string
}>

export type PhantomSetupKeys = keyof PhantomSetupFieldsMap

export type PhantomSetupValues = PhantomSetupFieldsMap[PhantomSetupKeys]

export const INITIAL_CONFIG: PhantomSetupFieldsMap = {
  sendSchedule: SendScheduleType.Weekdays,
  sendFrequency: 1,
  limitRegularSearch: 1,
  limitNavigatorSearch: 1,
  limitGroupSearch: 1,
  maxExecutionTime: 0,
  maxParallelExecutions: 0,
  maxRetries: 0,
  preferredProxy: PreferredProxyType.None,
  proxyAddress: "",
  proxyUsername: "",
  proxyPassword: "",
  IPLifespan: IPLifespanType.Static,
  refreshFrequency: 0,
}

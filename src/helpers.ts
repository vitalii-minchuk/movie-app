export const calcTime = (time: number): string => {
  const hours: number = Math.floor(time / 60)
  const mins: number = time % 60
  return `${hours}h ${mins}m`
}

export const convertMoney = (money: number): string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  })
  return formatter.format(money)
}

export const getRandomNumber = (): number => {
  return Math.floor(Math.random() * (20 - 0) + 0)
}

export const isPersistedState = (stateName: string): any => {
  const sessionState = sessionStorage.getItem(stateName)
  return sessionState && JSON.parse(sessionState)
};

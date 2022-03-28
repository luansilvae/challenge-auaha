import notifyAudio from "../assets/notify.webm"

export const playSound = () => {
  const notification = new Audio(notifyAudio)
  notification.play()
}

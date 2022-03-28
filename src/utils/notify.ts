import { toast } from "react-toastify"

export const notify = (message: string) =>
  toast.success(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined
  })

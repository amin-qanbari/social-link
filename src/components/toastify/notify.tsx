import { toast } from "react-toastify";
import "./notify.css";

// interface NotifyProps {
//   text: string;
//   type: string;
// }

export const notify = (text: string, type: string) => {
  if (type === "success") {
    toast.success(text);
  } else {
    toast.error(text);
  }
};

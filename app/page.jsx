import { redirect } from "next/navigation";

export default function App() {
  //====================
  // when authentication is implemented it will redirect to login/signup page. if already logged in then redirect to /notes.
  //====================

  redirect("/notes");
}

import { AppProvider } from "@globals/providers";
import { SignIn } from "@sections/SignIn";

export function Main() {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
}

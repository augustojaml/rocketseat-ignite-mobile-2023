import { AppProvider } from "@globals/providers";
import { SignIn } from "@sections/SignIn";

import { ANDROID_CLIENT_IND, IOS_CLIENT_IND } from "@env";
import { CONSOLE_DEBUG } from "@globals/helpers/console-debug";

export function Main() {
  // CONSOLE_DEBUG("Main", { ANDROID_CLIENT_IND, IOS_CLIENT_IND }, true);

  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
    </>
  );
}

/* eslint-disable */
import { App } from "vue";
import liff from "@line/liff";

interface LiffPluginOptions {
  liffId: string;
}

export default {
  install: (app: App, options: LiffPluginOptions): void => {
    liff.init({ liffId: options.liffId })
      .then(() => {
        if (liff.isLoggedIn()) {
          liff.getProfile().then(profile => {
            app.config.globalProperties.$liffUser = profile;
            console.log(profile);
          }).catch(err => console.error('Failed to get LIFF profile:', err));
        } else {
            liff.login({ redirectUri: "https://chatbot-front-end.vercel.app" });
        }
      })
      .catch(err => {
        console.error('LIFF Initialization failed:', err);
      });
  }
};

import { useAuthStore } from "@/stores/auth";
import { useGenericStore } from "@/stores/generics";
export default {
  install: function (app: any) {
    app.config.globalProperties.$auth = useAuthStore();
    app.config.globalProperties.$appStore = useGenericStore();
  },
};

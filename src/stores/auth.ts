import { defineStore } from "pinia";
export interface IAuth {
  roles: Array<string>;
  token: string | null;
  user: any;
}

const defaultAuth: IAuth = {
  roles: [],
  token: null,
  user: null,
};

export const useAuthStore = defineStore("UserAuthStore", {
  state: () => {
    const auth: IAuth = defaultAuth;
    return {
      auth,
    };
  },

  actions: {
    setAuth(auth: IAuth) {
      this.auth = auth;
    },
    clearAuth() {
      this.auth = {
        roles: [],
        token: null,
        user: null,
      };
    },
  },

  getters: {
    isLoggedIn(): boolean {
      return this.auth.token ? true : false;
    },

    hasRole: (state) => (role: string) => {
      return state.auth.roles.includes(role);
    },

    token(): string | null {
      return this.auth.token;
    },

    roles(): Array<string> {
      return this.auth.roles;
    },
    user(): any {
      return this.auth.user;
    },
  },
  persist: {
    enabled: true,
  },
});

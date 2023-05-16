import { defineStore } from "pinia";
export interface IGenerics {
  loading: boolean;
}

const defaultValues: IGenerics = {
  loading: false,
};

export const useGenericStore = defineStore("useGenericStore", {
  state: () => {
    const store: IGenerics = defaultValues;
    return {
      store,
    };
  },

  actions: {
    setLoading(flag: boolean) {
      this.store.loading = flag;
    },
  },

  getters: {
    loading(): boolean {
      return this.store.loading;
    },
  },
  persist: {
    enabled: true,
  },
});

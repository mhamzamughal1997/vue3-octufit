import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import * as _ from "lodash";
import MainPage from "@/views/index.vue";
import LoginPage from "@/views/login.vue";
import NotFound from "../views/404.vue";

/* Admin */
import AdminHome from "@/views/admin/index.vue";
import AdminUsers from "@/views/admin/users/index.vue";

import { APP_LAYOUTS } from "@/layouts/enums";
import { useAuthStore } from "@/stores/auth";

type TRouter = {
  route: RouteRecordRaw;
  icon: string;
  hidden?: boolean;
  title: string;
  section: routeSections;
};

export enum routeSections {
  ADMIN = "Admin",
  GYM_ADMIN = "GYM",
  TRAINER = "Trainer",
  TRAINEE = "Trainee",
  OTHER = "Others",
}

export const APP_ROUTES: Array<TRouter> = [
  {
    route: {
      path: "/admin",
      name: "Admin",
      component: AdminHome,
      meta: {
        requiresAuth: true,
      },
    },
    title: "Home",
    icon: "mdi-home",
    section: routeSections.ADMIN,
  },
  {
    route: {
      path: "/admin/users",
      name: "Admin Users",
      component: AdminUsers,
      meta: {
        requiresAuth: true,
      },
    },
    title: "Users",
    icon: "mdi-account-supervisor",
    section: routeSections.ADMIN,
  },
  {
    route: {
      path: "/",
      name: "home",
      component: MainPage,
      meta: {
        requiresAuth: true,
      },
    },
    title: "Home",
    icon: "mdi-home",
    section: routeSections.OTHER,
  },
  {
    route: {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        layout: APP_LAYOUTS.PUBLIC,
      },
    },
    title: "Login",
    icon: "mdi-lock",
    hidden: true,
    section: routeSections.OTHER,
  },
  {
    route: {
      path: "/404",
      name: "404",
      component: NotFound,
      meta: {
        layout: APP_LAYOUTS.PUBLIC,
      },
    },
    title: "404",
    icon: "mdi-bug",
    hidden: true,
    section: routeSections.OTHER,
  },
];

export const FILTERED_ROUTE: Array<TRouter> = _.filter(APP_ROUTES, (i) => {
  // return !i.hidden;
  return i;
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: _.map(APP_ROUTES, (i) => i.route),
});

router.beforeEach((from, to, next) => {
  const auth = useAuthStore();

  if (router.hasRoute(from.name || "")) {
    if (from.meta.requiresAuth && !auth.isLoggedIn) {
      next({ name: "login" });
    } else {
      next();
    }
  } else {
    next({ name: "404" });
  }
});

export default router;

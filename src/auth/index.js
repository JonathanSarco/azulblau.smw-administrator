import createAuth0Client from "@auth0/auth0-spa-js";
import { reactive, computed, watchEffect } from "vue";

let client;

const state = reactive({
  loading: true,
  isAuthenticated: false,
  user: {},
  popupOpen: false,
  error: null,
  permissions: [],
});

async function handleRedirectCallback() {
  state.loading = true;
  try {
    await client.handleRedirectCallback();
    state.user = await client.getUser();
    state.isAuthenticated = true;
  } catch (e) {
    state.error = e;
  } finally {
    state.loading = false;
  }
}

function loginWithRedirect(o) {
  return client.loginWithRedirect(o);
}

function getIdTokenClaims(o) {
  return client.getIdTokenClaims(o);
}

function getTokenSilently(o) {
  return client.getTokenSilently(o);
}

function logout(o) {
  return client.logout(o);
}

export const authPlugin = {
  isAuthenticated: computed(() => state.isAuthenticated),
  loading: computed(() => state.loading),
  getIdTokenClaims,
  getTokenSilently,
  loginWithRedirect,
  handleRedirectCallback,
  logout,
};

export const routeGuard = (to, from, next) => {
  const { isAuthenticated, loading } = authPlugin;

  const verify = () => {
    // If the user is authenticated, continue with the route
    if (isAuthenticated.value) {
      next();
    } else {
      next({ name: "Login" });
    }
  };

  // If loading has already finished, check our auth state using `fn()`
  if (!loading.value) {
    return verify();
  }

  // Watch for the loading property to change before we check isAuthenticated
  watchEffect(() => {
    if (loading.value === false) {
      return verify();
    }
  });
};

export const setupAuth = async (options, callbackRedirect) => {
  client = await createAuth0Client({
    ...options,
  });

  try {
    if (
      window.location.search.includes("code=") &&
      window.location.search.includes("state=")
    ) {
      const { appState } = await client.handleRedirectCallback();
      callbackRedirect(appState);
    }
  } catch (e) {
    state.error = e;
  } finally {
    // Initialize our internal authentication state
    state.isAuthenticated = await client.isAuthenticated();
    state.user = await client.getUser();
    state.loading = false;
  }

  return {
    install: (app) => {
      app.config.globalProperties.$auth = authPlugin;
    },
  };
};

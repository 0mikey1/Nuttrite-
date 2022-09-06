import {createContext, useEffect, useState, useMemo, useContext} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import * as usersApi from "./api/users"

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [loadingInitial, setLoadingInitial] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (error) setError(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  useEffect(() => {
    usersApi.getCurrentUser()
      .then((user) => {
        setUser(user);
        navigate.push(`/profile/${user.username}`);
      })
      .catch((error) => {})
      .finally(() => setLoadingInitial(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function login(username, password) {
    setLoading(true);

    usersApi.login({ username, password })
      .then((user) => {
        setUser(user);
        navigate.push(`/profile/${user.username}`);
      })
      .catch((error) => setError(error.response.data.error))
      .finally(() => setLoading(false));
  }

  function register(username, email, password) {
    setLoading(true);

    usersApi.register({ username, email, password })
      .then((user) => {
        setUser(user);
        navigate.push(`/profile/${user.username}`);
        // navigate.push(`/profile/${user.username}`);
      })
      .catch((error) => setError(error.response.data.error))
      .finally(() => setLoading(false));
  }

  function logout() {
    setLoading(true);

    usersApi.logout()
      .then(() => {
        setUser(null);
        navigate.push('/');
      })
  }

  const memoedValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      register,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}

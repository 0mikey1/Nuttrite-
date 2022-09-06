import useAuth from "../useAuth";

function Profile({match}) {

  const {user, logout} = useAuth();

  return (
    <div className="d-flex h-100">
      <div className="container my-auto" style={{maxWidth: 500}}>
        <h2>Profile</h2>
        <div>username: {user.username}</div>
        <div>email: {user.username}</div>
        <button className="btn btn-secondary" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Profile;

import React, { useContext} from 'react'
import  {Route, redirect}  from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
const PrivateRoute = ({element: Element, ...rest}) => {
    const authContext = useContext(AuthContext);
    const {isAuthenticated, loading} = authContext;
  return (
    <Route {...rest} render={props => !isAuthenticated & !loading ? (
        redirect("/login")
    ):(
        <Element {...props} />
    )}/>
  )
}

export default PrivateRoute

import React from 'react'
import {Route} from 'react-router-dom'
import {routes} from "../../routes";







const loading = (
    <div className="spinner-border " role="status">
        <p className="sr-only text-center">Loading...</p>
    </div>
)

export default function TheBody() {
    // const {isLogined} = useContext(AppContext)
    // console.log(isLogined)
    return (

            <div className="container-fluid">
                <React.Suspense fallback={loading}>
                    {routes.map((item, index) => {
                        // if (item.path === '/write-inquiry' && isLogined === false){
                        //         return (
                        //             <Redirect to=/dang-nhap />
                        //         )
                        // }

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                exact={item.exact}
                                component={item.component}
                            />
                        )
                    })}
                </React.Suspense>
            </div>

    )
}

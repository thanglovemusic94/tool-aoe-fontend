import React from 'react'
import TheHeader from './TheHeader'
import TheBody from './TheBody'
import TheFooter from './TheFooter'
import {useDispatch, useSelector} from 'react-redux'

export default function TheLayout() {
    // const [isLogined, setIsLogined] = useState(UserStorage.hasUserLocal())
    const { isLoggedIn } = useSelector(state => state.auth);
    const dispatch = useDispatch()


    console.log(isLoggedIn)
    // useEffect(() => {
    //     if (isLogined) dispatch(getUserDetails())
    // }, [isLogined])
    return (
            <div>
                <TheHeader />
                <TheBody />
                <TheFooter />
            </div>
    )
}

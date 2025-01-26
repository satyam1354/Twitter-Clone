import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getOtherUsers } from '../redux/userSlice'

const useOtherUsers = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(`${USER_API_END_POINT}/otherUser/${id}`, {
                    withCredentials: true
                });
                console.log(res)
                dispatch(getOtherUsers(res?.data?.otherUsers))
            } catch (error) {
                console.log(error)
            }
        }
        fetchOtherUsers()
    }, [id]);
}
export default useOtherUsers
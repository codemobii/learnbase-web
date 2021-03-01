import { useState } from 'react';
import Axios from 'axios';
import { useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';

const ProfileUtils = () => {
  //

  const toast = useToast();
  // let history = useHistory();

  // State managers

  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  // const token = JSON.parse(Cookies.get('token'));
  const user = Cookies.get('id');

  const handleGetUser = async () => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}users/${user}`,
    })
      .then(res => {
        setUserInfo(res.data.data);
      })
      .catch(er => {
        console.log(er.response);
        toast({
          title: 'Error',
          description: er.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    userInfo,
    handleGetUser,
  };
};

export default ProfileUtils;

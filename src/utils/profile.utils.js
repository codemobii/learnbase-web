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
  const [uploading, setUploading] = useState(false);
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

  const handleUpdateUser = async data => {
    setLoading(true);
    await Axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}users/${user}`,
      data,
    })
      .then(res => {
        handleGetUser();
        toast({
          title: 'Success',
          description: res.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
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

  const handleProfilePicUpdate = async () => {
    setUploading(true);
    const { files } = document.querySelector('#imageFile');
    const formData = new FormData();
    formData.append('file', files[0]);
    console.log(formData);
    // replace this with your upload preset name
    formData.append('upload_preset', 'zrhqsswu');

    const options = {
      method: 'POST',
      body: formData,
    };

    await fetch(
      'https://api.Cloudinary.com/v1_1/digital-specie/image/upload',
      options
    )
      .then(res => res.json())
      .then(async res => {
        await Axios({
          method: 'PUT',
          url: `${process.env.REACT_APP_API_URL}users/${user}`,
          data: {
            profilePic: res.secure_url,
          },
        })
          .then(res => {
            handleGetUser();
            toast({
              title: 'Success',
              description: res.data.message,
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
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
      })
      .catch(er => {
        console.log(er);
        toast({
          title: 'Error',
          description: er.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => setUploading(false));
  };

  return {
    loading,
    userInfo,
    uploading,
    handleProfilePicUpdate,
    handleUpdateUser,
    handleGetUser,
  };
};

export default ProfileUtils;

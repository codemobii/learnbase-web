import { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';

const AuthUtils = () => {
  //

  const toast = useToast();
  let history = useHistory();

  // State managers

  const [loading, setLoading] = useState(false);

  const token = Cookies.get('token');
  const id = Cookies.get('id');

  // Register
  const handleRegister = async data => {
    setLoading(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}register`,
      data,
    })
      .then(res => {
        toast({
          title: 'Success',
          description: res.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          history.push('/auth/sign_in');
        }, 1000);
      })
      .catch(er => {
        console.log(er.response.data);
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

  // Handle login
  const handleLogin = async data => {
    setLoading(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}login`,
      data,
    })
      .then(res => {
        toast({
          title: 'Success',
          description: 'Success',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        Cookies.set('token', res.data.token, { expires: 2 });
        Cookies.set('id', res.data.user._id, { expires: 2 });
        Cookies.set('role', res.data.user.role, { expires: 2 });
        setTimeout(() => {
          window.location.href = '/';
        }, 1000);
      })
      .catch(er => {
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

  // Handle forgot password
  const handleForgotPassword = async data => {
    setLoading(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}forgotPassword`,
      data,
    })
      .then(res => {
        toast({
          title: 'Success',
          description: res.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          history.push('/auth/reset_password');
        }, 1000);
      })
      .catch(er => {
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

  // Handle Verify

  const handleVerify = async data => {
    setLoading(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}verifyCode`,
      data,
    })
      .then(res => {
        toast({
          title: 'Success',
          description: res.data.message,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          history.push('/auth/reset_password');
        }, 1000);
      })
      .catch(er => {
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

  // Handle password reset
  const handleResetPassword = async data => {
    setLoading(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}resetPassword`,
      data,
    })
      .then(res => {
        toast({
          title: 'Success',
          description: 'visit login page to login',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setTimeout(() => {
          history.push('/auth/sign_in');
        }, 1000);
      })
      .catch(er => {
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

  // Handle logout
  const handleLogout = async data => {
    setLoading(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}logout`,
      data: {
        token: token,
      },
    })
      .then(res => {
        toast({
          title: 'Success',
          description: 'User logged out',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        Cookies.remove('token');
        Cookies.remove('id');

        //
        setTimeout(() => {
          window.location.href = '/auth/sign_in';
        }, 1000);
      })
      .catch(er => {
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
    handleRegister,
    loading,
    handleLogin,
    handleForgotPassword,
    handleVerify,
    handleResetPassword,
    handleLogout,
  };
};

export default AuthUtils;

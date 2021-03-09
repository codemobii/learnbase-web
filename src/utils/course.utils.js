import { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import Cookies from 'js-cookie';

const CourseUtils = () => {
  //

  const toast = useToast();
  let history = useHistory();

  // State managers

  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({});
  const [modules, setModules] = useState([]);
  const [module, setModule] = useState({});
  const [exercises, setExercises] = useState([]);
  const [result, setResult] = useState([]);
  const [score, setScore] = useState('');
  const [loadingForm, setLoadingForm] = useState(false);

  const token = Cookies.get('token');
  const user = Cookies.get('id');

  const handleStartCourseUser = async data => {
    console.log(data);
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
      url: `${process.env.REACT_APP_API_URL}registerCourse`,
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
          history.push(`/courses/${res.data.course._id}`);
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

  const handleGetCourse = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}user_course/${id}`,
    })
      .then(async res => {
        let data = { ...res.data.course, cover: res.data.course.cover.url };
        console.log(data);
        await Axios({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}module/`,
          params: {
            course: id,
          },
        })
          .then(res => {
            setModules(res.data.modules);
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
          });
        setCourse(data);
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

  // Get a module
  const handleGetModule = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}module/${id}`,
    })
      .then(res => {
        setModule(res.data.module);
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

  // Get exercises for module
  const handleGetExercises = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}exercise`,
      params: { module: id },
    })
      .then(res => {
        setExercises(res.data.questions);
        console.log(res);
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

  const handleProcessResult = async data => {
    setLoadingForm(true);
    await Axios({
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      proxy: {
        host: '104.236.174.88',
        port: 3128,
      },
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}result`,
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
          history.push(
            `/courses/${data.course}/${data.module}/exercise/result/${res.data.result._id}`
          );
        }, 1000);
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
      .finally(() => setLoadingForm(false));
  };

  // Get exercises for module
  const handleGetResult = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}result/${id}`,
    })
      .then(res => {
        setResult(res.data.result.result);
        setScore(res.data.result.score);
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

  // Get courses few
  const handleGetCoursesFew = async () => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}user_courses`,
      params: {
        user: user,
      },
    })
      .then(res => {
        const data = res.data.courses;
        // data.length = 3;
        setCourses(data);
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

  // Get a module all
  const handleGetCourses = async () => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}user_courses`,
      params: {
        user: user,
      },
    })
      .then(res => {
        setCourses(res.data.courses);
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

  // Get a module all
  const handleGetCoursesInstructor = async () => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}courses`,
      params: {
        institute: user,
      },
    })
      .then(res => {
        console.log(res);
        setCourses(res.data.courses);
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
    user,
    course,
    modules,
    module,
    exercises,
    loadingForm,
    result,
    score,
    courses,
    handleGetCoursesFew,
    handleGetCourses,
    handleGetResult,
    handleProcessResult,
    handleGetExercises,
    handleGetModule,
    handleGetCourse,
    handleStartCourseUser,
    handleGetCoursesInstructor,
  };
};

export default CourseUtils;

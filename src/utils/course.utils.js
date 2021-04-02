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
  const [uploading, setUploading] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const [students, setStudents] = useState([]);
  const [getting, setGetting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [results, setResults] = useState([]);
  const [userInfo, setUser] = useState({});
  const [units, setUnits] = useState([]);
  const [unit, setUnit] = useState({});
  const [comments, setComments] = useState([]);

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

  // Get course for instructor
  const handleGetCourseInstructor = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}course/${id}`,
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
      .then(async res => {
        await Axios({
          method: 'GET',
          url: `${process.env.REACT_APP_API_URL}users/${res.data.result.user}`,
        }).then(ress => {
          let score = res.data.result.score;
          setResult(res.data.result.result);
          setScore(score);
          setUser(ress.data.data);
        });
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

  // Get exercises for module
  const handleGetResultForModule = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}results/${id}`,
    })
      .then(res => {
        let data = [];
        const res_set = res.data.results;

        res_set.forEach(async p => {
          await Axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}users/${p.user}`,
          }).then(ress => {
            let user = { ...p, user: ress.data.data };
            data = [...data, user];
            setResults(data);
            console.log(data);
          });
        });
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
  const handleGetStudents = async id => {
    setGetting(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}participants/${id}`,
    })
      .then(res => {
        let data = [];
        const res_set = res.data.participants;

        res_set.forEach(async p => {
          await Axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}users/${p.user}`,
          }).then(ress => {
            let user = { ...p, user: ress.data.data };
            data = [...data, user];
            setStudents(data);
          });
        });
      })
      .catch(er => {
        console.log(er);
        toast({
          title: 'Error',
          description: 'something went wrong',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => {
        setGetting(false);
        setIsOpen(true);
      });
  };

  // Handle close
  const handleCose = () => {
    setIsOpen(false);
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
          description: er.response.data.message || 'An error occured',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      })
      .finally(() => setLoading(false));
  };

  // Start a course
  const handleStartCourse = async data => {
    setLoading(true);
    await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}course`,
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
          history.push(`/courses/${res.data.data._id}`);
        }, 1000);
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

  // Start a course
  const handleAddModule = async data => {
    setLoading(true);
    await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}module`,
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
          history.push(`/courses/${data.course}/${res.data.data._id}`);
        }, 1000);
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

  // Start a course
  const handleAddQuestion = async data => {
    setAdding(true);
    await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}exercise`,
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
        handleGetExercises(data.module);
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
      .finally(() => setAdding(false));
  };

  // Get a module all
  const handleEditCourse = async data => {
    setEditing(true);
    await Axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}course/${data.id}`,
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
      .finally(() => setEditing(false));
  };

  // Get a module all
  const handleEditModule = async data => {
    setEditing(true);
    await Axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}module/${data.id}`,
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
      .finally(() => setEditing(false));
  };

  // Upload image
  const handleImageUpload = async () => {
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
        setImgFile(res.secure_url);
        toast({
          title: 'Success',
          description: 'Upload successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
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

  // Upload image
  const handleVideoUpload = async () => {
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
      'https://api.Cloudinary.com/v1_1/digital-specie/video/upload',
      options
    )
      .then(res => res.json())
      .then(async res => {
        setImgFile(res.secure_url);
        toast({
          title: 'Success',
          description: 'Upload successful',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
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

  // ************************** UNITS ***************************** //

  // Start a course
  const handleAddUnit = async data => {
    setLoading(true);
    await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}units`,
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
          history.push(`/courses/${data.course}/${data.module}/units`);
        }, 1000);
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
  const handleEditUnit = async data => {
    setEditing(true);
    await Axios({
      method: 'PUT',
      url: `${process.env.REACT_APP_API_URL}units/${data.id}`,
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
      .finally(() => setEditing(false));
  };

  // Get a units all
  const handleGetUnits = async module => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}units`,
      params: {
        module: module,
      },
    })
      .then(res => {
        setUnits(res.data.units);
        console.log(res.data);
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
  const handleGetSingleUnit = async id => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}units/${id}`,
    })
      .then(res => {
        setUnit(res.data.unit);
        console.log(res.data);
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

  // Get a units all
  const handleGetComments = async module => {
    setLoading(true);
    await Axios({
      method: 'GET',
      url: `${process.env.REACT_APP_API_URL}comments`,
      params: {
        module: module,
      },
    })
      .then(res => {
        setComments(res.data.comments);
        console.log(res.data);
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

  //

  const handlePostComment = async data => {
    setLoading(true);
    await Axios({
      method: 'POST',
      url: `${process.env.REACT_APP_API_URL}comments`,
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
        handleGetComments(data.module);
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
    uploading,
    imgFile,
    students,
    getting,
    isOpen,
    editing,
    results,
    adding,
    userInfo,
    units,
    unit,
    comments,
    handleGetComments,
    handlePostComment,
    handleAddUnit,
    handleEditUnit,
    handleGetUnits,
    handleGetSingleUnit,
    handleAddQuestion,
    handleCose,
    handleEditCourse,
    handleGetStudents,
    handleEditModule,
    handleGetResultForModule,
    handleImageUpload,
    handleAddModule,
    handleStartCourse,
    handleGetCoursesFew,
    handleGetCourses,
    handleGetResult,
    handleProcessResult,
    handleGetExercises,
    handleGetModule,
    handleGetCourse,
    handleVideoUpload,
    handleStartCourseUser,
    handleGetCourseInstructor,
    handleGetCoursesInstructor,
  };
};

export default CourseUtils;

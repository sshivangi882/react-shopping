import { Formik, useFormik } from "formik";

export default function FormikValidation() {

    function VerifyUserDetails(userDetails){
        const errors  = {};

        if(userDetails.userName ==""){
            errors.userName = "User Name is required";
        }else if(userDetails.userName.length <4){
            errors.userName = "Name too short";
        }
        if(userDetails.Age ==""){
            errors.Age = "User Name is required";
        }
        if(userDetails.Email ==""){
            errors.Email = "User Name is required";
        }
        return errors; 
    }

    const formik = useFormik({
        initialValues : {
            userName: '',
            Age: 0, 
            Email: ''
        },
        validate : VerifyUserDetails,
        onSubmit : values => {
            alert(JSON.stringify(values));
        }
    })
  return (
    <div className="container-fluid">
      <form onSubmit={formik.handleSubmit}>
        <h2>Register User</h2>
        <dl>
          <dt>User Name</dt>
          <dd>
            <input name="userName" type="text" onChange={formik.handleChange}></input>
            
          </dd>
          <dd className="text-danger">{formik.errors.userName}</dd>
          <dt>Age</dt>
          <dd>
            <input name="Age" type="text" onChange={formik.handleChange}></input>
          </dd>
          <dd className="text-danger">{formik.errors.Age}</dd>
          <dt>Email</dt>
          <dd>
            <input  name="Email" type="text" onChange={formik.handleChange} />
          </dd>
          <dd className="text-danger">{formik.errors.Email}</dd>
        </dl>
        <button>Register</button>
      </form>
    </div>
  );
}

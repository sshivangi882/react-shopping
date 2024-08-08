import { useFormik } from "formik";
import * as  yup from 'yup';

export default function YupValidation(){

    const formik = useFormik({
        initialValues :{
            UserName :'',
            Email : '',
            Age  :0
        },
        validationSchema : yup.object({
            UserName : yup.string()
                          .required("User Name Required")
                          .min(4, "name too SHort")
                          .max(10, "name too long"),
            Email : yup.string()
                          .email("Invalid Email")
                          .required("Email Required"),
            Age : yup.number()
                        .required("Age Required")
                        .positive("Age must be positive")

        }),
        onSubmit : values =>{
            alert(JSON.stringify(values))
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...formik.getFieldProps("UserName")}  type="text"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>  
                    {/* formik.errors.UserName is used to display the error message */}
                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps("Age")} type="text"/></dd>
                    <dd  className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps("Email")} type="text"/></dd>
                    <dd  className="text-danger">{formik.errors.Email}</dd>
                    
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}
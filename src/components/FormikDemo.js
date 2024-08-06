import { Formik, useFormik } from "formik"

export default function FormikDemo()
{
    const formik = useFormik({
        initialValues : {
            UserName : '',
            Password : '',
            City : '',
            Subscribe  : true
            
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Subscribe</dt>
                    <dd className="form-switch"><input className="form-check-input" onChange={formik.handleChange} name="Subscribe" checked={formik.values.Subscribe} type="checkbox"/>yes</dd>
                </dl>
                <button >Register</button>
            </form>
            <h2>User Details</h2>
            {formik.values.UserName}
        </div>
    )
}
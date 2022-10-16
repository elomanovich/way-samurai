import {Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";

type PropsType = {}

export const Login = (props: PropsType) => {
    return <div>
        <h1>Login</h1>
        <BasicFormik/>
    </div>
}

// const LoginForm = (props: any) => {
//     return (
//         <form>
//             <div><input placeholder={'Login'}/></div>
//             <div><input placeholder={'Password'}/></div>
//             <div><input type={'checkbox'}/> remember me</div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
const validateForm = (values: ValueFormikType) => {
    const errors = {};
    return errors
}
type ValueFormikType = {
    login: string
    password: string
}
const BasicFormik = () => {
    const submit = (values: ValueFormikType, {setSubmitting}: FormikHelpers<{ login: string; password: string; }>) => {

    }
    return <div>
        <Formik
            initialValues={{login: '', password: ''}}
            validate={validateForm}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <div><Field type="login" name="login"/></div>
                    <div><Field type="password" name="password"/></div>
                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}
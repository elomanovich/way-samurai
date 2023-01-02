import {ErrorMessage, Field, Form, Formik, FormikHelpers} from "formik";
import React from "react";
import s from './Login.module.css'
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type PropsType = any

const Login = (props: PropsType) => {
    const onSubmit = (values: ValueFormikType) => {
        props.login(values.email, values.password, values.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <BasicFormik onSubmit={onSubmit}/>
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
const validate = (value: ValueFormikType) => {
    const errors: any = {}
    if (!value.email) {
        errors.email = 'Field is required'
    } else if (!value.password) {
        errors.password = 'Field is required'
    } else if (value.email.length < 2) {
        errors.email = 'Min length is 2 symbols'
    } else if (value.password.length < 2) {
        errors.password = 'Min length is 2 symbols'
    }
    return errors
}
type ValueFormikType = {
    email: string
    password: string
    rememberMe: boolean
}
type PropsFormType = {
    onSubmit: (values: ValueFormikType) => void
}
const BasicFormik = (props: PropsFormType) => {
    const submit = (values: ValueFormikType, {setSubmitting}: FormikHelpers<{ email: string; password: string; rememberMe: boolean }>) => {
        props.onSubmit(values)
    }
    return <div>
        <Formik
            initialValues={{email: '', password: '', rememberMe: false}}
            validate={validate}
            onSubmit={submit}
        >
            {({errors, isSubmitting}) => (
                <Form>
                    <div><Field className={errors.email ? s.errorField : ''} type="email" name="email"/></div>
                    <ErrorMessage className={s.error} name={'email'} component={'div'}/>
                    <div><Field className={errors.password ? s.errorField : ''} type="password" name="password"/></div>
                    <ErrorMessage className={s.error} name={'password'} component={'div'}/>
                    <div><Field name={'rememberMe'} type={'checkbox'}/> remember me</div>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}
type MapStatePropsType = {
    isAuth: boolean| null
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth['isAuth']
})

export default connect(mapStateToProps, {login})(Login)
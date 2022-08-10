import {Field, Form, Formik} from "formik";
import React from "react";

type PropsType = {}

export const Login = (props: PropsType) => {
    return <div>
        <h1>Login</h1>
        <LoginFormik/>
    </div>
}

const LoginForm = (props: any) => {
    return (
        <form>
            <div><input placeholder={'Login'}/></div>
            <div><input placeholder={'Password'}/></div>
            <div><input type={'checkbox'}/> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginFormik = (props: any) => {
    return <div>
        <Formik
            initialValues={{login: '', password: ''}}
            onSubmit={(formData) => {

            }}>
            {({isSubmitting}) => (
                <Form>
                    <div><Field type="text" name="login" placeholder={'Login'}/></div>
                    <div><Field type="password" name="password" placeholder={'Password'}/></div>
                    <div><Field type="checkbox" name="rememberMe"/>remember me</div>
                    <div>
                        <button type="submit" name="buttonLogin">
                            Login
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
}
import * as React from 'react';
import {useFormik} from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
    email: yup.string()
    .required("kindly fill this field")
    .min(5,"need a longer email"),
    password: yup.string()
    .required("Kindly fill this field")
    .min(8,"need a longer password")
    .max(12,"Too much password"),
})

export function BasicForm() {
    const formik = useFormik({
        initialValues: {email: "", password: ""},
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log("onSubmit", values);
        }
    });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input 
      value={formik.values.email} 
      type="email" 
      id="email"
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="email" 
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <br/>

      <input 
      value={formik.values.password} 
      type="password" 
      id="password"
      name="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      placeholder="password" 
      />
      {formik.touched.password && formik.errors.password ? formik.errors.password : ""}
      <br/>
      
      <button type="submit">Submit</button>
    </form>
  );
}

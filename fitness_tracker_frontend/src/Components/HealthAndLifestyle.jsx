import { useFormik } from "formik";
import * as Yup from "yup";

const HealthAndLifestyle = ({ nextStep, prevStep }) => {
  const formik = useFormik({
    initialValues: {
      water_intake: "",
      sleep_hours: "",
      dietary_preference: "",
      medical_conditions: "",
    },
    validationSchema: Yup.object({
      water_intake: Yup.number()
        .min(0, "Enter a valid amount")
        .required("Required"),
      sleep_hours: Yup.number()
        .min(0, "Enter a valid number of hours")
        .max(24, "Must be less than 24")
        .required("Required"),
      dietary_preference: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log("Health & Lifestyle Data:", values);
      nextStep(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "300px", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ marginBottom: "10px" }}>Health & Lifestyle</h3>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Water Intake (Liters/Day)</label>
        <input
          type="number"
          {...formik.getFieldProps("water_intake")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.water_intake && formik.errors.water_intake && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.water_intake}</div>
        )}
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Sleep Hours (Per Night)</label>
        <input
          type="number"
          {...formik.getFieldProps("sleep_hours")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
        {formik.touched.sleep_hours && formik.errors.sleep_hours && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.sleep_hours}</div>
        )}
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Dietary Preference</label>
        <select {...formik.getFieldProps("dietary_preference")} style={{ width: "100%", padding: "8px", marginTop: "5px" }}>
          <option value="">Select</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Vegan">Vegan</option>
        </select>
        {formik.touched.dietary_preference && formik.errors.dietary_preference && (
          <div style={{ color: "red", fontSize: "12px" }}>{formik.errors.dietary_preference}</div>
        )}
      </div>
      
      <div style={{ marginBottom: "10px" }}>
        <label>Medical Conditions (Optional)</label>
        <input
          type="text"
          {...formik.getFieldProps("medical_conditions")}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
        <button type="button" onClick={prevStep} style={{ padding: "8px 16px", background: "#ccc", border: "none", cursor: "pointer" }}>Back</button>
        <button type="submit" style={{ padding: "8px 16px", background: "#007BFF", color: "white", border: "none", cursor: "pointer" }}>Next</button>
      </div>
    </form>
  );
};

export default HealthAndLifestyle;
